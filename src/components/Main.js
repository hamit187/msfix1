import { Fragment } from 'react';
import classes from './Main.module.scss';

const Main = () => {
    return (
        <Fragment>
            <div className={classes.section}>
                <h1>Welcome!</h1>
            </div>
        </Fragment>
    );
};

export default Main;