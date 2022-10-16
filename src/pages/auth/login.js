import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthButton from "../../components/buttons/auth";

const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const mapper = {
    user: "User",
    manager: "Manager",
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (response) => {
      if (response.code) {
        localStorage.setItem("cred_id", response.code);
        navigate(state.type === "manager" ? "/manager" : "/user");
      }
    },
    onError: (response) => console.log("google failure", response),
    flow: "auth-code",
  });

  return (
    <div className="login-page">
      <div className="left">
        <h1>Sign in as a {mapper[state.type] || "User"}</h1>
        <div className="login-button-wrapper">
          <AuthButton
            onClick={loginWithGoogle}
            title="Sign in with Google"
            icon="google"
          />
          <AuthButton
            onClick={loginWithGoogle}
            title="Sign in with Instagram"
            icon="instagram"
          />
          <AuthButton
            onClick={loginWithGoogle}
            title="Sign in with Twitch"
            icon="twitch"
          />
        </div>
        <div className="login-go-back">
          <Link to={-1}>Go Back</Link>
        </div>
      </div>
      <div
        className="right"
        style={{ backgroundImage: "url('/images/dev.jpg')" }}
      />
    </div>
  );
};

export default Login;
