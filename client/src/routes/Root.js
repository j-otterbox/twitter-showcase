import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MainNavbar from "../components/MainNavbar";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { Fragment } from "react";
import "./Root.css";

const Root = () => {
  return (
    <Fragment>
      <MainNavbar />
      <MainHeader />
      <main className="main__root">
        <Container>
          <Row>
            <Col lg={8}>
              <div id="detail">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <MainFooter></MainFooter>
    </Fragment>
  );
};

export default Root;
