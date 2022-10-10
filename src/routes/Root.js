import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MainNavbar from "../components/MainNavbar";
import MainHeader from "../components/MainHeader";

const Root = () => {
  return (
    <main>
      <MainNavbar />
      <Container>
        <Row>
          <MainHeader />
          <div id="detail">
            <Outlet />
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Root;
