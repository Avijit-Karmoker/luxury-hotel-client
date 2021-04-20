import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import google from "../../../images/google1.png";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        setUserToken();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.error(errorCode, errorMessage, email, credential);
      });
  };

  const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token', idToken);
    }).catch(function(error) {
      // Handle error
    });
  }

  const handleBlur = () => {

  }
  return (
    <div>
      <div className="shadow p-5" style={{width: '40%', margin: 'auto', marginTop: '13%'}}>
        <form>
          <label htmlFor="" className="mb-2">
            Your Name
          </label>{" "}
          <br />
          <input
            className="form-control"
            type="text"
            name="name"
            onBlur={handleBlur}
            placeholder="Your name"
            required
          />
          <label htmlFor="" className="mb-2 mt-2">
            Your Email
          </label>{" "}
          <br />
          <input
            className="form-control"
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="Your email"
            required
          />
          <label htmlFor="" className="mb-2 mt-2">
            Your Email
          </label>{" "}
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Your password"
            required
          />
          <input type="button" value="Submit" className="btn btn-brand mt-3" />{" "}
          <br />
        </form>
        <div className="text-center">
          <button
            className="btn bg-brand text-white mt-3"
            onClick={handleGoogleSignIn}
          >
            <img style={{width: '20px'}} src={google} alt="" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
