import { Card, Image, Container, Row, Col } from "react-bootstrap";
import { format, formatDistanceToNowStrict } from "date-fns";
import "./Tweet.css";

const Tweet = (props) => {
  const tweetCreateDate = new Date(props.data.created_at);
  const timeSinceTweeted = formatDistanceToNowStrict(tweetCreateDate, {
    unit: "minute" | "second" | "hour" | "day" | "month" | "year",
  });

  const accountCreateDate = new Date(props.data.account.created_at);
  const joinDate = format(accountCreateDate, "MMMM yyyy");

  return (
    <Card className="tweet">
      <Container>
        <Row>
          <Col sm={1}>
            <Image
              src={props.data.account.profile_image_url}
              alt="Twitter Account Profile Image"
              roundedCircle={true}
            />
          </Col>
          <Col sm={11}>
            <h4>
              {props.data.account.name}
              <span className="tweet__username">
                @{props.data.account.username}
              </span>
              &middot;
              <span className="tweet__date">{timeSinceTweeted} ago</span>
            </h4>
            <p>{props.data.account.description}</p>
            <div>
              <ul className="tweet__account-stats">
                <li>Joined {joinDate}</li>
                <li>
                  {props.data.account.public_metrics.followers_count} Following
                </li>
                <li>
                  {props.data.account.public_metrics.following_count} Followers
                </li>
                <li>{props.data.account.public_metrics.tweet_count} Tweets</li>
              </ul>
            </div>
            <p>{props.data.text}</p>

            {props.data.media?.map((elem) => {
              return (
                <Image
                  key={elem.media_key}
                  src={elem.preview_image_url || elem.url}
                  alt="Tweet Media"
                  fluid={true}
                />
              );
            })}

            <ul className="tweet__stats">
              <li>
                <span className="icon material-symbols-outlined">
                  chat_bubble
                </span>
                {props.data.public_metrics.reply_count}
              </li>
              <li>
                <span className="icon material-symbols-outlined">
                  autorenew
                </span>
                {props.data.public_metrics.retweet_count}
              </li>
              <li>
                <span className="icon material-symbols-outlined">favorite</span>
                {props.data.public_metrics.like_count}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Tweet;
