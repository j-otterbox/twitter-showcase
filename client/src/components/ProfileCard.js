import { Image, Button } from "react-bootstrap";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const getTweetBtnHandler = (name) => {
    props.onGetTweetBtnClick(name);
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
        size="lg"
        variant="success"
        onClick={() => getTweetBtnHandler(props.data.name)}
      >
        Get Tweet
      </Button>
    </div>
  );
};

export default ProfileCard;
