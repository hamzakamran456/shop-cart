import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config"; // Assuming this initializes Firebase

const provider = new GoogleAuthProvider();
const auth = getAuth(app); // Use the initialized app
auth.languageCode = "it";

const LoginDemo = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert("Login Successfully Done!");
        console.log("User:", user);
      })
      .catch((error) => {
        console.error("Error during login:", error.message);
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="m-5 p-5">
      <button className="bg-primary px-4 py-2 text-white rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginDemo;
