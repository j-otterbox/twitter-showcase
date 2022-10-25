import { useRef } from "react";
import { Image, Button } from "react-bootstrap";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const getTweetBtn = useRef(null);

  const handleFocus = () => {
    getTweetBtn.current.blur(); // removing focus
  };

  const getTweetBtnHandler = (username) => {
    props.onGetTweetBtnClick(username);
    handleFocus();
  };

  return (
    <div className="random__profile-card">
      <h4>
        {props.data.name}
        <span className="icon material-symbols-outlined">verified</span>
      </h4>
      <Image
        fluid={true}
        roundedCircle={true}
        src={props.data.src}
        alt="Twitter Profile Image"
      />
      <Button
        ref={getTweetBtn}
        size="lg"
        variant="success"
        onClick={() => getTweetBtnHandler(props.data.username)}
      >
        Get Tweet
      </Button>
    </div>
  );
};

export default ProfileCard;
