import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ProjectHeader from "../components/ProjectHeader";

const Root = () => {
  return (
    <main>
      <Container>
        <Row>
          <ProjectHeader />
          <div id="detail">
            <Outlet />
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Root;
