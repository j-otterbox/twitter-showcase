const express = require("express");
// const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();

// ! FOR PRODUCTION
// app.use("/", express.static(path.join(__dirname, "client/build")));

// TODO: build out endpoints that are going to make requests to the twitter API
// // ! #1: search based on user name
// ! #2: search based on content (keyword search)
// ! #3: get a random tweet (most recent?) from a list of predetermined users

const client = axios.create({
  baseURL: "https://api.twitter.com/2/tweets/search/",
  timeout: 1000,
  headers: {
    "User-Agent": "v2RecentSearchJS",
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

app.get("/", function (req, res) {
  res.send("<h1>Twitter Showcase API</h1>");
});

app.get("/api/tweets/search", async function (req, res) {
  if (Object.keys(req.query).length === 0) {
    res.status(200).json({
      response: {
        info: "The search endpoint requires additional parameters.",
        examples: {
          username: "/search?username=${username_here}",
          keywords: "/search?keywords=${keywords_here}",
        },
      },
      status: 200,
    });
  } else if (req.query.username) {
    const username = req.query.username;
    const isValidTwitterHandle = /^(\w){1,15}$/.test(username);

    if (isValidTwitterHandle) {
      const query = `recent?expansions=author_id,attachments.media_keys&user.fields=description,name,profile_image_url,public_metrics,username,verified&query=from:${username}&media.fields=preview_image_url,url`;

      const response = await client
        .get(query)
        .then((resp) => resp)
        .catch((err) => err.response);

      if (response.status === 200) {
        res.status(200).json(response.data);
      } else if (response.status === 400) {
        res.status(400).json({ errorMsg: "Bad Request", status: 400 });
      } else if (response.status === 404) {
        res.status(404).json({ errorMsg: "Not Found", status: 404 });
      }
    } else {
      // username is too long, improper characters, etc.
      res.status(400).json({ errorMsg: "Bad Request", status: 400 });
    }
  } else if (req.query.keywords) {
    const keywords = encodeURIComponent(req.query.keywords);
    const query = `recent?expansions=author_id,attachments.media_keys&user.fields=description,name,profile_image_url,public_metrics,username,verified&query=${keywords}&media.fields=preview_image_url,url`;

    const response = await client
      .get(query)
      .then((resp) => resp)
      .catch((err) => err.response);

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else if (response.status === 400) {
      res.status(400).json({ errorMsg: "Bad Request", status: 400 });
    } else if (response.status === 404) {
      res.status(404).json({ errorMsg: "Not Found", status: 404 });
    }
  } else {
    res.status(400).json({ errorMsg: "Bad Request", status: 400 });
  }
});

app.get("/api/tweets/random/:username", function (req, res) {
  const validTwitterHandles = [
    "barackObama",
    "justinbieber",
    "elonmusk",
    "katyperry",
    "rihanna",
  ];

  // if (validTwitterHandles.includes(req.params.username.toLowerCase())) {
  //   res.status(200).json({ successMsg: "ok username received", status: 200 });
  // } else {
  //   res.status(400).json({ errorMsg: "Bad Request", status: 400 });
  // }

  res.status(200).json(req.params);
});

// 404
app.use((req, res) => {
  res.status(404).send("<h1>404 | Not found</h1>");
});

app.listen(3080);
