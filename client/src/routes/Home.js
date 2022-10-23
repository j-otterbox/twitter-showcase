// import { Fragment } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import cats from "../assets/cats-typing.gif";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row className="home__row">
        <Col lg={8} className="home__col">
          <Image
            src={cats}
            alt="Montage of cats typing furiously at computers"
            fluid="true"
            className="home__img"
          />
          <div className="home__text-block">
            <h2>What exactly is this app?</h2>
            <p>
              If you want to get small doses of Twitter as Elon Musk works
              diligently on making the average user's experience worse after
              buying the company, then this app is for you! So don't wait a
              second more and start pulling those tweets! Just try not to use it
              too much because I only get 500k tweets per month.
            </p>
          </div>
          <div className="home__text-block">
            <h2>How do I use the app?</h2>
            <p>
              Head over to the search page and follow the instructions there to
              start pulling tweets, or visit the random page to get a random
              tweet from some of the most followed accounts on Twitter.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
