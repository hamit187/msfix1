import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slices/authSlice";
import classes from "./Header.module.scss";

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("isLogged");
    localStorage.removeItem("Token");
  };

  const toggleProfileHandler = () => {
    dispatch(authActions.toggleProfile());
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>MsFix</div>
        {isLoggedIn && <div className={classes.btn}>
          <button onClick={toggleProfileHandler}>Profile</button>
          <button onClick={logoutHandler}>Logout</button>
        </div>}
      </div>
    </Fragment>
  );
};

export default Header;
