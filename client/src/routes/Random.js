import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoadingOverlay from "../components/LoadingOverlay";
import RandomTweetModal from "../components/RandomTweetModal";
import ProfileCard from "../components/ProfileCard";
import obamaProfile from "../assets/profiles/barack_obama_profile.jpeg";
import cristianoProfile from "../assets/profiles/cristiano_ronaldo_profile.jpeg";
import elonProfile from "../assets/profiles/elon_musk_profile.jpg";
import katyProfile from "../assets/profiles/katy_perry_profile.jpeg";
import rihannaProfile from "../assets/profiles/rihanna_profile.jpeg";
import { getCache, refreshCache, isExpired } from "../util/cache";
import axios from "axios";
import "./Random.css";

const users = [
  { name: "Barack Obama", username: "barackobama", src: obamaProfile },
  { name: "Cristiano Ronaldo", username: "cristiano", src: cristianoProfile },
  { name: "Elon Musk", username: "elonmusk", src: elonProfile },
  { name: "Katy Perry", username: "katyperry", src: katyProfile },
  { name: "Rihanna", username: "rihanna", src: rihannaProfile },
];

const client = axios.create({
  baseURL: "http://localhost:3080",
});

const Random = () => {
  console.log("loading the random page");
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [randomTweets, setRandomTweets] = useState([]);
  const [selectedTweet, setTweet] = useState(null);

  useEffect(() => {
    loadCacheData();
  }, []);

  const loadCacheData = async () => {
    let cache = getCache();

    if (!cache || isExpired(cache)) {
      // create a new cache
      setIsLoading(true);
      const response = await client
        .get("/api/tweets/random")
        .then((resp) => resp)
        .catch((err) => err);

      if (response.status === 200) {
        refreshCache(response.data.data);
        cache = getCache();
      } else {
        // todo: use old data or inform user that something went wrong
      }
    }

    // cache exists or has been refreshed
    setRandomTweets(cache.data);
    setIsLoading(false);
  };

  const onGetTweetBtnClick = (username) => {
    const randomTweetsItem = randomTweets.find(
      (elem) => elem.account.username.toLowerCase() === username
    );

    const randIndex = Math.floor(
      Math.random() * randomTweetsItem.tweets.length
    );
    const selectedTweet = {
      ...randomTweetsItem.tweets[randIndex],
      account: randomTweetsItem.account,
    };

    setTweet(selectedTweet);
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
                According to Wikipedia, these are some of the most followed
                people on Twitter. Click on the button below each picture to
                pull up a random tweet from that user.
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
      {selectedTweet && (
        <RandomTweetModal
          show={modalShow}
          data={selectedTweet}
          onHide={() => setModalShow(false)}
        />
      )}
      <LoadingOverlay isLoading={isLoading} />
    </Fragment>
  );
};

export default Random;
