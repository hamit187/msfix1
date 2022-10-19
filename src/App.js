import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "./store/slices/authSlice";

import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const createAccount = useSelector(state => state.auth.createAccount);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      <Header />
      {!isLoggedIn && (!createAccount ? <SignIn /> : <SignUp />)}
      {isLoggedIn && <div><h1>Welcome user!</h1><button onClick={logoutHandler}>Logout</button></div>}
    </Fragment>
  );
}

export default App;