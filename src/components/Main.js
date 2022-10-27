import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './Main.module.scss';

const Main = () => {
    const profile = useSelector(state => state.auth.profile);

    return (
        <Fragment>
            {!profile && <div className={classes.main}>
                <h1>Welcome!</h1>
            </div>}
            {profile && <div className={classes.profile}>
                <p>User Email</p>
            </div>}
        </Fragment>
    );
};

export default Main;