import { Card } from "react-bootstrap";
import "./Tweet.css";

const Tweet = () => {
  return (
    <Card className="tweet">
      <h4>This is a tweet.</h4>
      <ul>
        <li>The full text of the tweet</li>
        <li>The username of the twitter user who authored the tweet</li>
        <li>At least one image (if an image was attached)</li>
        <li>At least one video (if a video was attached)</li>
        <li>At least one gif (if a gif was attached)</li>
        <li>The retweet count</li>
        <li>The “hearted” (favorited) count</li>
      </ul>
    </Card>
  );
};

export default Tweet;
