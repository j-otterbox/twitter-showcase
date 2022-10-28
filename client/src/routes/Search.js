import { useState, Fragment } from "react";
import { Alert, Card, Container, Row, Col } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import Tweet from "../components/Tweet";
import axios from "axios";
import "./Search.css";

import LoadingOverlay from "../components/LoadingOverlay";

const client = axios.create({
  timeout: 5000,
});

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [alertVisible, setAlertVisibility] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");

  const onSearchFormSubmit = async (input) => {
    let params = input.trim();
    let searchType;

    const isValidTwitterHandle = /^@(\w){1,15}$/.test(params);
    if (isValidTwitterHandle) {
      searchType = "username";
      params = params.slice(1); // drop the @
    } else {
      searchType = "keywords";
      params = encodeURIComponent(params);
    }

    const query = `/api/tweets/search?${
      isValidTwitterHandle ? "username" : "keywords"
    }=${params}`;

    // make the request, handle the response appropriately
    setIsLoading(true);
    const response = await client
      .get(query)
      .then((resp) => resp)
      .catch((err) => err);

    if (response.status === 200) {
      const returnedResults = Object.keys(response.data.data).length > 0;

      if (returnedResults) {
        setAlertVisibility(false);
        if (searchType === "username") {
          // rearrange object props
          const account = response.data.data.account;
          const tweets = response.data.data.tweets.map((tweet) => {
            return {
              account,
              ...tweet,
            };
          });
          setSearchResults(tweets);
        } else if (searchType === "keywords") {
          setSearchResults(response.data.data.tweets);
        }
      } else {
        setAlertVariant("secondary");
        setAlertTitle("No Results!");
        setAlertText("Your search returned 0 results.");
        setAlertVisibility(true);
        setSearchResults([]);
      }
    } else {
      setAlertVariant("danger");
      setAlertTitle("Uh-oh! Something went wrong!");
      setAlertText(
        "If you're seeing this message then something went wrong with the app or at Twitter HQ."
      );
      setAlertVisibility(true);
      setSearchResults([]);
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
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
            {searchResults.length > 0 &&
              !alertVisible &&
              searchResults.map((tweet) => {
                return (
                  <Card key={tweet.id} className="tweet__card">
                    <Tweet key={tweet.id} data={tweet} />
                  </Card>
                );
              })}

            <Alert
              className={alertVisible ? "" : "hidden"}
              variant={alertVariant}
            >
              <Alert.Heading>{alertTitle}</Alert.Heading>
              <p>{alertText}</p>
            </Alert>
          </Col>
        </Row>
      </Container>
      <LoadingOverlay isLoading={isLoading} />
    </Fragment>
  );
};

export default Search;
