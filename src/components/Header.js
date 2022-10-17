import { Fragment } from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>MsFix</div>
      </div>
    </Fragment>
  );
};

export default Header;
