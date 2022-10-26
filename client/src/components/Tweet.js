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
    <Container>
      <Row>
        <Col className="tweet__col">
          <Image
            src={props.data.account.profile_image_url}
            alt="Twitter Account Profile Image"
            roundedCircle={true}
            className="tweet__profile-image"
          />
          <div className="tweet__content">
            <div className="tweet__header">
              <div className="tweet__header-title">
                <h4>
                  <span className="tweet__name">
                    {props.data.account.name}
                    <span className="material-symbols-outlined">verified</span>
                  </span>
                  <span className="tweet__username">
                    <a
                      href={`https://twitter.com/${props.data.account.username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{props.data.account.username}
                    </a>
                  </span>
                </h4>
                <span className="tweet__date">
                  <span className="material-symbols-outlined">history</span>
                  {timeSinceCreated} ago
                </span>
              </div>

              {props.data.account.description && (
                <p>{props.data.account.description}</p>
              )}

              <AccountMetrics page="search" data={accountMetrics} />
            </div>
            <div className="tweet__body">
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

              <TweetMetrics page="search" data={tweetMetrics} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tweet;
