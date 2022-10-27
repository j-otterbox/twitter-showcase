import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const SearchInput = (props) => {
  const [validated, setValidated] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true); // form is invalid
    } else {
      // pass the search term(s) to the parent component
      props.onSearchFormSubmit(searchInput);

      setSearchInput("");
      setValidated(false);
    }
  };

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Form noValidate validated={validated} onSubmit={searchFormSubmitHandler}>
      <InputGroup>
        <Form.Control
          type="text"
          value={searchInput}
          onChange={searchInputHandler}
          placeholder="Search for @username or keywords..."
          required
        />
        <Button className="submit-btn" variant="success" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchInput;
