import { Fragment } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import TweetMetrics from "./TweetMetrics";
import { format, formatDistanceToNowStrict } from "date-fns";
import "./RandomTweetModal.css";

import ReactDOM from "react-dom";

const RandomTweetModal = (props) => {
  const tweetCreateDate = new Date(props.data.created_at);
  const timeSinceCreated = formatDistanceToNowStrict(tweetCreateDate, {
    unit: "minute" | "second" | "hour" | "day" | "month" | "year",
  });
  const tweetMetrics = {
    displayDate: format(tweetCreateDate, "h:mm aa MMM d, yyyy"),
    ...props.data.public_metrics,
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal
          {...props}
          className="random__tweet-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Image
                src={props.data.account.profile_image_url}
                alt="Twitter Account Profile Image"
                roundedCircle={true}
              />
              <h4>
                {props.data.account.name}
                <span className="tweet__username">
                  @{props.data.account.username}
                </span>
                &middot;
                <span className="tweet__date">{timeSinceCreated} ago</span>
              </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default RandomTweetModal;
