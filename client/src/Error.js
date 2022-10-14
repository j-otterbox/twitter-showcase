import { useRouteError } from "react-router-dom";
import { Fragment } from "react";

const Error = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <h2>Uh-oh, looks like there was an error!</h2>
      <h3>
        {error.status} | {error.statusText}{" "}
      </h3>
    </Fragment>
  );
};

export default Error;
