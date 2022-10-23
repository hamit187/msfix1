import { authActions } from "../slices/authSlice";

const apiKey = process.env.REACT_APP_API_KEY;

export const loginUser = (userData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      return data;
    };

    try {
      const authData = await sendRequest();
      await dispatch(authActions.login(authData.idToken));
      localStorage.setItem("isLogged", "1");
      localStorage.setItem("Token", authData.idToken);
    } catch (error) {
      alert("Unauthorized access!");
    }
  };
};

export const createUser = (userData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
    };

    try {
      await sendRequest();
      await dispatch(authActions.switchForm());
      alert("Account created!");
    } catch (error) {
      alert("Failed creating account!");
    }
  };
};
