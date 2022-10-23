import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "./store/slices/authSlice";

import Header from "./components/Header";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const createAccount = useSelector(state => state.auth.createAccount);

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Header />
      {!isLoggedIn && (!createAccount ? <SignIn /> : <SignUp />)}
      {isLoggedIn && <Main />}
    </Fragment>
  );
}

export default App;