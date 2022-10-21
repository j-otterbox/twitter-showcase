import { Container, Row, Col } from "react-bootstrap";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header__main">
      <Container>
        <Row>
          <Col>
            <h1>Twitter Showcase</h1>
            <h4>Find tweets from your favorite users!</h4>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default MainHeader;
