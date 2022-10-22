import { Form, InputGroup, Button } from "react-bootstrap";

const SearchInput = () => {
  return (
    <Form>
      <InputGroup>
        <Form.Control placeholder="Search for @username or keywords..." />
        <Button variant="success">Search</Button>
      </InputGroup>
    </Form>
  );
};

export default SearchInput;
