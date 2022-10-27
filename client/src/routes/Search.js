import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import "./Search.css";
import Tweet from "../components/Tweet";
import fakeResponse from "../keywords-search-data";

// three types of media: video, photo, animated_gif

const Search = () => {
  return (
    <Container>
      <Row className="search__row">
        <Col lg={8} xl={7}>
          <div className="search__text-block">
            <h2>Searching Twitter</h2>
            <p>
              Searching for tweets is as easy as entering a valid username
              preceded by the @ symbol or simply entering in the content you
              wish to find. For example, @alyankovic will return only content
              authored by Weird Al, but alyankovic will return <em>any</em>{" "}
              content from all users that contains the search query.
            </p>
            <SearchInput />
          </div>
        </Col>
      </Row>
      <Row className="search__row">
        <Col lg={8} xl={7}>
          {fakeResponse.data.tweets.map((tweet) => {
            return (
              <Card key={tweet.id} className="tweet__card">
                <Tweet key={tweet.id} data={tweet} />
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
