import axios from 'axios'


const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const LOGOUT = "LOGOUT"


export const auth = (email, password, isSignup) => {
    return async dispatch => {
        dispatch(AuthStart());
        try {
            const key = 'AIzaSyAuu3liJuCUgbpTD4TgZGLvqsmelnq6xzQ'
            let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`

            if(!isSignup){
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
            }
            const response = await axios.post(url, 
            {
                email,
                password,
                returnSecureToken: true,
            })
            console.log(response.data);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            dispatch(AuthSuccess(response.data));
        } catch (error) {
            dispatch(AuthFail(error));
            console.log(error);
            
        }
    }
}

export const AuthStart = () => {
    return {
      type: AUTH_START,
    };
  };
  
  export const AuthSuccess = userData => {
    return {
      type: AUTH_SUCCESS,
      token: userData.idToken,
      userID: userData.localId,
    };
  };
  
  export const AuthFail = (error) => {
    return {
      type: AUTH_FAIL,
      error: error,
    };
  };



  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return {
        type: LOGOUT,
    }
  }


  export const authCheck = () => {
    return dispatch => {
      const token = localStorage.getItem('token');
      if(!token){
        return;
      }
      const userId = localStorage.getItem('userId');
      dispatch(AuthSuccess({
        idToken: token,
        localId: userId,
      }))
    }
  }

  



export {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT ,
}