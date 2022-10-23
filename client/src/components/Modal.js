import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Modal as BsModal } from "react-bootstrap";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BsModal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <BsModal.Header closeButton>
            <BsModal.Title id="contained-modal-title-vcenter">
              Modal heading
            </BsModal.Title>
          </BsModal.Header>
          <BsModal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </BsModal.Body>
          <BsModal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </BsModal.Footer>
        </BsModal>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
