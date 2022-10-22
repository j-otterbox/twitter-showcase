import { Fragment } from "react";
import SearchInput from "../components/SearchInput";
// import Tweet from "../components/Tweet";
// import fakeResponse from "../keywords-search-data";

// three types of media: video, photo, animated_gif

const Search = () => {
  return (
    <Fragment>
      <SearchInput />
      <h2>This is the Search page.</h2>
      <ul>
        {/* <li>
          Allows user to search for a twitter username or by tweet content from
          the last 7 days (if username/content exists then display the 10 most
          recent tweets)
        </li> */}
        <li>
          If a user searches for a twitter user that doesn’t exist, they should
          be notified that the twitter user does not exist
        </li>
        <li>
          The search results that are displayed should look “twitter-like”. Make
          it look interesting!
        </li>
      </ul>
      {/* {fakeResponse.data.tweets.map((tweet) => {
        return <Tweet key={tweet.id} data={tweet} />;
      })} */}
    </Fragment>
  );
};

export default Search;
