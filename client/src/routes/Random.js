import { Image, Container, Row, Col, Button } from "react-bootstrap";
import obamaProfile from "../assets/profiles/barack_obama_profile.jpeg";
import elonProfile from "../assets/profiles/elon_musk_profile.jpg";
import justinProfile from "../assets/profiles/justin_bieber_profile.jpg";
import katyProfile from "../assets/profiles/katy_perry_profile.jpeg";
import rihannaProfile from "../assets/profiles/rihanna_profile.jpeg";
import "./Random.css";

const Random = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <div className="random__text-block">
            <h2>Random Tweets</h2>
            <p>
              According to Wikipedia, these are the most followed people on
              twitter. Click on the button below each picture to pull up a
              random tweet from that user.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="random__row">
        <Col md={4} className="random__profile-card">
          <h4>
            Barack Obama
            <span className="icon material-symbols-outlined">verified</span>
          </h4>
          <Image
            fluid={true}
            roundedCircle={true}
            src={obamaProfile}
            alt="Barack Obama's Twitter Profile Image"
          />
          <Button size="lg" variant="success">
            Get Tweet
          </Button>
        </Col>
        <Col md={4} className="random__profile-card">
          <h4>
            Justin Bieber
            <span className="icon material-symbols-outlined">verified</span>
          </h4>
          <Image
            fluid={true}
            roundedCircle={true}
            src={justinProfile}
            alt="Justin Bieber's Twitter Profile Image"
          />
          <Button size="lg" variant="success">
            Get Tweet
          </Button>
        </Col>
        <Col md={4} className="random__profile-card">
          <h4>
            Elon Musk
            <span className="icon material-symbols-outlined">verified</span>
          </h4>
          <Image
            fluid={true}
            roundedCircle={true}
            src={elonProfile}
            alt="Elon Musk's Twitter Profile Image"
          />
          <Button size="lg" variant="success">
            Get Tweet
          </Button>
        </Col>
        <Col md={4} className="random__profile-card">
          <h4>
            Katy Perry
            <span className="icon material-symbols-outlined">verified</span>
          </h4>
          <Image
            fluid={true}
            roundedCircle={true}
            src={katyProfile}
            alt="Katy Perry's Twitter Profile Image"
          />
          <Button size="lg" variant="success">
            Get Tweet
          </Button>
        </Col>
        <Col md={4} className="random__profile-card">
          <h4>
            Rihanna
            <span className="icon material-symbols-outlined">verified</span>
          </h4>
          <Image
            fluid={true}
            roundedCircle={true}
            src={rihannaProfile}
            alt="Rihanna Twitter Profile Image"
          />
          <Button size="lg" variant="success">
            Get Tweet
          </Button>
        </Col>
      </Row>
      <Row>
        {/* <h2>This is the Random page.</h2>
      <ul>
        <li>
          Find 5 of your favorite users on twitter (celebrities, athletes, etc)
          and when prompted, randomly choose a tweet from any of those five
          users and display it
        </li>
      </ul> */}
      </Row>
    </Container>
  );
};

export default Random;
