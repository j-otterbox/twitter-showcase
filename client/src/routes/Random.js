import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "../components/Modal";
import ProfileCard from "../components/ProfileCard";
import obamaProfile from "../assets/profiles/barack_obama_profile.jpeg";
import cristianoProfile from "../assets/profiles/cristiano_ronaldo_profile.jpeg";
import elonProfile from "../assets/profiles/elon_musk_profile.jpg";
import katyProfile from "../assets/profiles/katy_perry_profile.jpeg";
import rihannaProfile from "../assets/profiles/rihanna_profile.jpeg";
import { getCache, refreshCache, isExpired } from "../util/cache";
import "./Random.css";

const users = [
  { name: "Barack Obama", src: obamaProfile },
  { name: "Cristiano Ronaldo", src: cristianoProfile },
  { name: "Elon Musk", src: elonProfile },
  { name: "Katy Perry", src: katyProfile },
  { name: "Rihanna", src: rihannaProfile },
];

console.log("hello im outside the random page");

const Random = () => {
  console.log("loading the random page");
  const [modalShow, setModalShow] = useState(false);
  // const [randomTweets] = useState([]);

  useEffect(() => {
    // todo: basically do the same thing as with the star wars app,
    // check if there is an item in localstorage with the correct name

    // the cache needs to have requests for all 5 users...

    // if there is, parse it and use the data where you need it,
    // if there isn't, make a request to get selected users tweets, cache it and select 1
    loadCacheData();
  }, []);

  const loadCacheData = async () => {
    const cache = getCache();

    if (!cache || isExpired(cache)) {
      console.log("cache does not exist or is expired");
      // todo: create a new cache by running the request
    }

    // set the cache data to a state variable?
  };

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
