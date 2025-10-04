import { Outlet } from "react-router-dom";

const AuthLayOut = () => {
  return (
    <div>
      <h4>AuthLayOut</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayOut;
