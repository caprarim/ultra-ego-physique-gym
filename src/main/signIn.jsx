import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EndBar from "./endBar.jsx";
import SideBar from "./sidebar.jsx";
import { supabase } from "./supabase-client.jsx";

const planDetails = {
  "Strength-Special": {
    title: "Strength Special",
    price: "2500 PKR",
  },
  Cardio: {
    title: "Cardio",
    price: "2500 PKR",
  },
  "Ladies-Class": {
    title: "Ladies Class",
    price: "2500 PKR",
  },
  Combine: {
    title: "Combine",
    price: "5000 PKR",
  },
  Quarterly: {
    title: "Quarterly Plan",
    price: "7000 PKR",
  },
  "Half-Year": {
    title: "Half Year Plan",
    price: "14000 PKR",
  },
  Yearly: {
    title: "Yearly Plan",
    price: "25000 PKR",
  },
};

const SignIn = ({ role }) => {
  const { plan } = useParams();
  const selectedPlan = planDetails[plan] || {
    title: "Membership Plan",
    price: "",
  };

  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [emailErrMsg, setEmailErrMsg] = useState("");
  let [passErrMsg, setPassErrMsg] = useState("");
  let [unmatchedEmailErr, setUnmatchedEmailErr] = useState("");
  let nav = useNavigate();

  async function saveCredentials() {
    const trimmedEmail = email.trim();
    const trimmedPass = password.trim();

    const isEmailInvalid =
      trimmedEmail.length == 0 ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".") ||
      trimmedEmail.length > 50;

    const isPassInvalid = trimmedPass.length == 0 || trimmedPass.length < 6;

    if (trimmedEmail.length == 0) {
      setEmailErrMsg("Please enter your email address!");
    } else if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setEmailErrMsg("Email must enter a valid email.");
    } else if (trimmedEmail.length > 50) {
      setEmailErrMsg("Email can not be that large!");
    } else {
      setEmailErrMsg("");
    }

    if (trimmedPass.length == 0) {
      setPassErrMsg("Please enter a password!");
    } else if (trimmedPass.length < 6) {
      setPassErrMsg("Password must be at least 6 characters");
    } else {
      setPassErrMsg("");
    }

    let { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error.message);
    }
    let { data } = await supabase.from("credentials").select("*");
    data?.map((D) => {
      if (email == D.Email && password == D.Password) {
        nav("/payment");
      }
    });

    if (
      !isEmailInvalid &&
      !isPassInvalid &&
      role?.user?.aud == "authenticated" &&
      role?.user?.email != email
    ) {
      setUnmatchedEmailErr("Email not matching!");
    }
  }

  function reDirectToSignUp() {
    nav(`/joinMembership/${plan}`);
  }

  return (
    <main className="gym-page membership-form-page">
      <SideBar
        click1={() => nav("/about")}
        click2={() => nav("/")}
        click3={() => nav("/moreinfo")}
        click4={() => nav("/memberships")}
      ></SideBar>

      <section className="membership-form-shell">
        <div className="membership-form-header">
          <h1 className="membership-form-title">Sign In To Continue</h1>
          <p className="membership-form-step">
            Access your account and continue.
          </p>
        </div>

        <div className="membership-selected-plan-card">
          <div className="membership-selected-plan-info">
            <span className="membership-selected-plan-label">
              Selected Offer
            </span>
            <h2 className="membership-selected-plan-name">
              {selectedPlan.title}
            </h2>
          </div>
          <span className="membership-selected-plan-price">
            {selectedPlan.price}
          </span>
        </div>

        <h3 className="membership-member-details-title">Member Details</h3>

        <form className="membership-input-grid">
          <div className="membership-input-group">
            <label className="membership-input-label">Email Address</label>
            <input
              className={`membership-input-control ${
                emailErrMsg || unmatchedEmailErr
                  ? "membership-input-control-error"
                  : ""
              }`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-message-name">
              {emailErrMsg || unmatchedEmailErr}
            </p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Password</label>
            <input
              className={`membership-input-control ${
                passErrMsg ? "membership-input-control-error" : ""
              }`}
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-message-name">{passErrMsg}</p>
          </div>
        </form>

        <div className="membership-payment-row">
          <span className="membership-payment-note">
            Sign in, then confirm your plan with the gym
          </span>
          <button
            className="membership-payment-btn"
            type="button"
            onClick={saveCredentials}
          >
            Sign In
          </button>
          <button className="sign-in" type="button" onClick={reDirectToSignUp}>
            New here? Sign up
          </button>
        </div>
      </section>

      <EndBar />
    </main>
  );
};

export default SignIn;
