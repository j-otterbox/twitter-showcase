import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main>
      <h1>This is the root which wraps all content</h1>
      <div id="detail">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
