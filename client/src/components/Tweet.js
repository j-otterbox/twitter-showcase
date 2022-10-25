import { Image, Container, Row, Col } from "react-bootstrap";
import { format, formatDistanceToNowStrict } from "date-fns";
import "./Tweet.css";
import TweetMetrics from "./TweetMetrics";
import AccountMetrics from "./AccountMetrics";

const Tweet = (props) => {
  const tweetCreateDate = new Date(props.data.created_at);
  const timeSinceCreated = formatDistanceToNowStrict(tweetCreateDate, {
    unit: "minute" | "second" | "hour" | "day" | "month" | "year",
  });

  const accountMetrics = {
    joinDate: format(new Date(props.data.account.created_at), "MMMM yyyy"),
    ...props.data.account.public_metrics,
  };

  const tweetMetrics = {
    displayDate: format(tweetCreateDate, "h:mm aa MMM d, yyyy"),
    ...props.data.public_metrics,
  };

  return (
    <Container className="tweet">
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
            <span className="tweet__date">{timeSinceCreated} ago</span>
          </h4>
          <p>{props.data.account.description}</p>

          <AccountMetrics data={accountMetrics} />

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

          <TweetMetrics data={tweetMetrics} />
        </Col>
      </Row>
    </Container>
  );
};

export default Tweet;
