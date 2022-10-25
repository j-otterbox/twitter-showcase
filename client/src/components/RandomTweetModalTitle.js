import { Image, Modal } from "react-bootstrap";
import "./RandomTweetModalTitle.css";

const RandomTweetModalTitle = (props) => {
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
            @{props.data.username}
          </span>
        </h4>
        <span className="random-tweet-modal-title__date">
          <span className="icon material-symbols-outlined">history</span>
          {props.data.timeSinceTweetCreated} ago
        </span>
      </div>
    </Modal.Title>
  );
};

export default RandomTweetModalTitle;
