import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
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
            <div id="detail">
              <Outlet />
            </div>
          </Row>
        </Container>
      </main>
      <MainFooter></MainFooter>
    </Fragment>
  );
};

export default Root;