import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Puff } from "react-loader-spinner";
import Overlay from "./Overlay";

function LoadingOverlay(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay isLoading={props.isLoading}>
          <Puff
            height="100"
            width="100"
            radius={1}
            color="#1DA1F2"
            ariaLabel="puff-loading"
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
