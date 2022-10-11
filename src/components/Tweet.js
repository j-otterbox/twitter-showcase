import { Card } from "react-bootstrap";
import "./Tweet.css";

const Tweet = (props) => {
  return (
    <Card className="tweet">
      <h4>This is a tweet.</h4>
      <ul>
        <li>{props.data.username}</li>
        <li>{props.data.text}</li>
        <li>At least one image (if an image was attached)</li>
        <li>At least one video (if a video was attached)</li>
        <li>At least one gif (if a gif was attached)</li>
        <li>Retweets: {props.data.retweets}</li>
        <li>The “hearted” (favorited) count</li>
      </ul>
    </Card>
  );
};

export default Tweet;
