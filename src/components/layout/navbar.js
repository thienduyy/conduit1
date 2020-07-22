import React, { useEffect } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userPending, logout } from "../../actions/login";

// import { Link } from "react-router-dom";

function Navbar() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (login.isLogin) {
      dispatch(userPending());
    }
  }, [login.isLogin, dispatch]);

  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <header className="navbar">
      <nav>
        <div className="nav-brand">
          <NavLink to="/">
            <span>conduit</span>
          </NavLink>
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-items">
              <NavLink to="/home">Home</NavLink>
            </li>
            {!login.isLogin ? (
              <>
                <li className="nav-items">
                  <NavLink to="/signin">Sign in</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/signup">Sign up</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-items">
                  <NavLink to="/newpost">New Post</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/setting">Setting</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/profile">{login.username}</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/signin" onClick={logoutHandle}>
                    <LogoutOutlined />
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
