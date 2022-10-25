import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { RevolvingDot } from "react-loader-spinner";
import Overlay from "./Overlay";

function LoadingOverlay(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay isLoading={props.isLoading}>
          <RevolvingDot
            height="100"
            width="100"
            radius="6"
            color="#1DA1F2"
            secondaryColor=""
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default LoadingOverlay;
