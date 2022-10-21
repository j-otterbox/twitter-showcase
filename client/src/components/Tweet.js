import { Card, Image } from "react-bootstrap";
import "./Tweet.css";

const Tweet = (props) => {
  return (
    <Card className="tweet">
      <div className="tweet__header">
        <Image
          src={props.data.account.profile_image_url}
          alt="Twitter Account Profile Image"
          roundedCircle={true}
        />
        <h4>
          {props.data.account.name}
          <span>@{props.data.account.username}</span>
          <span>{props.data.created_at}</span>
        </h4>
        <p>{props.data.account.description}</p>
        <div className="tweet__account-stats">
          <ul>
            <li>
              {props.data.account.public_metrics.followers_count} Following
            </li>
            <li>
              {props.data.account.public_metrics.following_count} Followers
            </li>
            <li>{props.data.account.public_metrics.tweet_count} Tweets</li>
          </ul>
        </div>
      </div>
      <div className="tweet__body">
        <p>{props.data.text}</p>

        {props.data.media?.map((elem) => {
          return (
            <Image
              key={elem.media_key}
              src={elem.preview_image_url}
              alt="Tweet Media"
              fluid={true}
            />
          );
        })}

        <ul className="tweet__stats">
          <li>{props.data.public_metrics.reply_count} Replies</li>
          <li>{props.data.public_metrics.retweet_count} Retweets</li>
          <li>{props.data.public_metrics.like_count} Likes</li>
        </ul>
      </div>
    </Card>
  );
};

export default Tweet;
