import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";
import obamaProfile from "../assets/profiles/barack_obama_profile.jpeg";
import justinProfile from "../assets/profiles/justin_bieber_profile.jpg";
import elonProfile from "../assets/profiles/elon_musk_profile.jpg";
import katyProfile from "../assets/profiles/katy_perry_profile.jpeg";
import rihannaProfile from "../assets/profiles/rihanna_profile.jpeg";
import "./Random.css";
import Modal from "../components/Modal";
import { Fragment } from "react";

const users = [
  { name: "Barack Obama", src: obamaProfile },
  { name: "Justin Bieber", src: justinProfile },
  { name: "Elon Musk", src: elonProfile },
  { name: "Katy Perry", src: katyProfile },
  { name: "Rihanna", src: rihannaProfile },
];

const Random = () => {
  const [modalShow, setModalShow] = useState(false);

  const onGetTweetBtnClick = (name) => {
    console.log("get a random tweet from", name);
    setModalShow(true);
  };

  return (
    <Fragment>
      <Container>
        <Row className="random__row">
          <Col lg={8}>
            <div className="random__text-block">
              <h2>Random Tweets</h2>
              <p>
                According to Wikipedia, these are the most followed people on
                Twitter. Click on the button below each picture to pull up a
                random tweet from that user.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="random__row">
          {users.map((elem) => {
            return (
              <Col key={elem.name} md={4}>
                <ProfileCard
                  data={elem}
                  onGetTweetBtnClick={onGetTweetBtnClick}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default Random;
