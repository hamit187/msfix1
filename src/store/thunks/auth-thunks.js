import { authActions } from "../slices/authSlice"; 

const apiKey = process.env.REACT_APP_API_KEY;

export const loginUser = (userData) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    returnSecureToken: true,
                }),
                headers: {
                    "Content-type": "application/json",
                },
            });

            if(!response.ok){
                throw new Error();
            }

            const data = await response.json();

            return data;
        };

        try {
            const authData = await sendRequest();
            await dispatch(authActions.login(authData.idToken));
        }catch(error){
            alert('Unauthorised access!');
        }
    }
};

// export const createAccount = (userData) => {
//     return async = (dispatch) => {
//         const sendRequest = async = () => {
//             const response = await fetch(``);
//         };
//     };
// };