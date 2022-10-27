import { Image, Modal } from "react-bootstrap";
import "./RandomTweetModalTitle.css";

const RandomTweetModalTitle = (props) => {
  console.log(props.data);

  return (
    <Modal.Title
      id="contained-modal-title-vcenter"
      className="random-tweet-modal__title"
    >
      <Image
        src={props.data.profileImageUrl}
        alt="Twitter Account Profile Image"
        roundedCircle={true}
        className="random-tweet-modal-title__img"
      />
      <div className="random-tweet-modal-title__container">
        <h4 className="random-tweet-modal-title__header">
          <span className="random-tweet-modal-title__name">
            {props.data.name}
            <span className="icon material-symbols-outlined">verified</span>
          </span>
          <span className="random-tweet-modal-title__username">
            <a
              href={`https://twitter.com/${props.data.username}`}
              target="_blank"
              rel="noreferrer"
            >
              @{props.data.username}
            </a>
          </span>
        </h4>
        <div>
          <span className="random-tweet-modal-title__date">
            <span className="icon material-symbols-outlined">history</span>
            {props.data.timeSinceTweetCreated} ago
          </span>
          <a
            href={`https://twitter.com/${props.data.username}/status/${props.data.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>
    </Modal.Title>
  );
};

export default RandomTweetModalTitle;
