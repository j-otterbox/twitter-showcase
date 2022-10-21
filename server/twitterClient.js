const axios = require("axios");
require("dotenv").config();

const client = axios.create({
  baseURL: "https://api.twitter.com/2/tweets/search/",
  timeout: 1000,
  headers: {
    "User-Agent": "v2RecentSearchJS",
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

exports.get = async (params, searchType) => {
  const query = getQueryString(params, searchType);
  const response = await client
    .get(query)
    .then((resp) => resp)
    .catch((err) => err.response);

  // format successful request, return error response as is
  if (response.status === 200) {
    response.data = formatSearchResponse(response, searchType);
  }

  return response;
};

const getQueryString = (params, searchType) => {
  if (searchType === "username" || searchType === "random") {
    return `recent?query=from:${params}&expansions=author_id,attachments.media_keys&user.fields=created_at,description,name,profile_image_url,public_metrics,username,verified&tweet.fields=created_at,public_metrics&media.fields=preview_image_url,url`;
  } else if (searchType === "keywords") {
    return `recent?query=${params}&expansions=author_id,attachments.media_keys&user.fields=created_at,description,name,profile_image_url,public_metrics,username,verified&tweet.fields=created_at,public_metrics&media.fields=preview_image_url,url`;
  }
};

const formatSearchResponse = (twitterAPIResponse, searchType) => {
  const includes = twitterAPIResponse.data.includes; // shorten obj prop chain
  const data = twitterAPIResponse.data.data;
  const formattedResponse = {};

  if (twitterAPIResponse.data.meta.result_count === 0) {
    return formattedResponse;
  }

  formattedResponse.tweets = data.map((tweet) => {
    let newTweet = {
      id: tweet.id,
      created_at: tweet.created_at,
      text: tweet.text,
      public_metrics: tweet.public_metrics,
    };

    if (searchType === "keywords") {
      // bundle account data w/ each individual tweet
      newTweet = {
        ...newTweet,
        account: {
          ...includes.users.find((user) => user.id === tweet.author_id),
        },
      };
    }

    // include media when applicable
    if (tweet.attachments?.media_keys) {
      newTweet.media = [];
      for (const key of tweet.attachments.media_keys) {
        newTweet.media.push(
          includes.media.find((elem) => key === elem.media_key)
        );
      }
    }

    return newTweet;
  });

  // reduce response size by attaching account data separately when only one user's tweets are returned
  if (searchType === "username" || searchType === "random") {
    formattedResponse.account = {
      ...includes.users[0],
    };

    // return a single tweet when getting a random tweet
    if (searchType === "random") {
      const randIndex = Math.floor(
        Math.random() * formattedResponse.tweets.length
      );
      formattedResponse.tweets = [formattedResponse.tweets[randIndex]]; // return as array for consistency
    }
  }

  return formattedResponse;
};
