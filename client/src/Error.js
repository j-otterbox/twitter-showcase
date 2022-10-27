import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error__container">
      <h2>Uh-oh, looks like there was problem!</h2>
      <h3>
        {error.status} | {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
