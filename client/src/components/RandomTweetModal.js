import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, Image } from "react-bootstrap";
import RandomTweetModalTitle from "./RandomTweetModalTitle";
import TweetMetrics from "./TweetMetrics";
import { format, formatDistanceToNowStrict } from "date-fns";
import { parseEntities } from "../util/entities";
import "./RandomTweetModal.css";

const RandomTweetModal = (props) => {
  let tweetInnerHtml = { __html: props.data.text };

  if (props.data.entities) {
    tweetInnerHtml = parseEntities(tweetInnerHtml.__html, props.data.entities);
  }

  const tweetCreateDate = new Date(props.data.created_at);
  const timeSinceTweetCreated = formatDistanceToNowStrict(tweetCreateDate, {
    unit: "minute" | "second" | "hour" | "day" | "month" | "year",
  });

  const titleData = {
    id: props.data.id,
    name: props.data.account.name,
    username: props.data.account.username,
    profileImageUrl: props.data.account.profile_image_url,
    timeSinceTweetCreated,
  };

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
            <RandomTweetModalTitle data={titleData} />
          </Modal.Header>
          <Modal.Body>
            <p dangerouslySetInnerHTML={tweetInnerHtml}></p>

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
