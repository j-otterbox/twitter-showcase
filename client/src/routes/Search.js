import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import Tweet from "../components/Tweet";
import axios from "axios";
import "./Search.css";

import fakeResponse from "../keywords-search-data";

const client = axios.create({
  baseURL: "http://localhost:3080",
});

const Search = () => {
  const onSearchFormSubmit = (input) => {
    const isValidTwitterHandle = /^@(\w){1,15}$/.test(input.trim());
    const params = encodeURIComponent(input.trim());

    const query = `/api/tweets/search?${
      isValidTwitterHandle ? "username" : "keywords"
    }=${params}`;

    // make the request, handle the response appropriately
  };

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
              content from all users that include the search term(s).
            </p>
            <SearchInput onSearchFormSubmit={onSearchFormSubmit} />
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
