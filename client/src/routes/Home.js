import { Fragment } from "react";
import cats from "../assets/cats-typing.gif";

const Home = () => {
  return (
    <Fragment>
      <h2>This is the HOME page.</h2>
      <img src={cats} alt="Montage of cats typing furiously at computers"></img>
      <ul>
        <li>
          Contains a message that explains what the app is. It should explain
          what the web app is in three sentences. Don’t be boring...make it fun
          and interesting.
        </li>
        <li>
          Include an image and a title/headline that grabs attention (for free
          images use http://www.unsplash.com)
        </li>
      </ul>
    </Fragment>
  );
};

export default Home;
