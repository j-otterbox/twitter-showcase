import { Fragment } from "react";
import Tweet from "../components/Tweet";

const tweets = [
  {
    username: "@dummyOne",
    text: "Looking at cleavage is like looking into the sun. You don't stare at it. It's too risky. You get a sense of it, then you look away.",
    retweets: 15,
    media: {
      video: "",
      image: "",
      gif: "",
    },
  },
  {
    username: "@dummyTwo",
    text: "What could possess anyone to throw a party? I mean, to have a bunch of strangers treat your house like a hotel room.",
    retweets: 65,
    media: {
      video: "",
      image: "",
      gif: "",
    },
  },
  {
    username: "@dummyThree",
    text: "I feel like my old self again. Totally inadequate, completely insecure, paranoid, neurotic. It's a pleasure.",
    retweets: 47,
    media: {
      video: "",
      image: "",
      gif: "",
    },
  },
  {
    username: "@dummyFour",
    text: "Yeah, I'm a great quitter. It's one of the few things I do well. I come from a long line of quitters.",
    retweets: 87,
    media: {
      video: "",
      image: "",
      gif: "",
    },
  },
];

const Search = () => {
  return (
    <Fragment>
      <h2>This is the Search page.</h2>
      <ul>
        <li>
          Allows user to search for a twitter username or by tweet content from
          the last 7 days (if username/content exists then display the 10 most
          recent tweets)
        </li>
        <li>
          If a user searches for a twitter user that doesn’t exist, they should
          be notified that the twitter user does not exist
        </li>
        <li>
          The search results that are displayed should look “twitter-like”. Make
          it look interesting!
        </li>
      </ul>
      {tweets.map((elem) => (
        <Tweet key={elem.username} data={elem} />
      ))}
    </Fragment>
  );
};

export default Search;
