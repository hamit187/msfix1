import { Fragment } from "react";

import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Fragment>
      <Header />
      <SignIn />
      {/* <SignUp /> */}
    </Fragment>
  );
}

export default App;