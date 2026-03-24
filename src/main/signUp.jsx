import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import { supabase } from "./supabase-client.jsx";
import EndBar from "./endBar.jsx";

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

const MemberShipPlans = () => {
  const { plan } = useParams();
  const selectedPlan = planDetails[plan] || {
    title: "Membership Plan",
    price: "",
  };

  const nav = useNavigate();

  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let phoneRef = useRef(null);
  let passRef = useRef(null);

  let [fullName, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");
  let [tele, setTele] = useState("");
  let [isSignUp, setSignUp] = useState("Sign Up");
  let [nameErrorMessage, setNameErrorMessage] = useState("");
  let [passErrorMessage, setPassErrorMessage] = useState("");
  let [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  let [emailErrorMessage, setEmailERrorMessage] = useState("");
  let [modalDisplay, setModalDisplay] = useState(false);
  let [alreadyAuthenticated, setAlreadyAuthenticated] = useState("");

  let isNameAndEmailDisplay = isSignUp == "Sign Up";

  function handleFNameChange(e) {
    setFullname(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassChange(e) {
    setPass(e.target.value);
  }

  function handleTeleChange(e) {
    setTele(e.target.value);
  }

  function removeModalDisplay() {
    setModalDisplay(false);
  }

  function handleSwitchToSignIn() {
    setSignUp("Sign In");
    setFullname("");
    setEmail("");
    setPass("");
    setTele("");
    setAlreadyAuthenticated("");
    nav(`/signin/${plan}`);
  }

  function handleSwitchToSignUp() {
    setSignUp("Sign Up");
    setFullname("");
    setEmail("");
    setPass("");
    setTele("");
  }

  async function saveCredentials() {
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = tele.trim();
    const digitsOnlyPhone = trimmedPhone.replace(/\D/g, "");
    const trimmedPass = password.trim();
    const isNameInvalid = trimmedName.length == 0 || trimmedName.length > 20;
    const isEmailInvalid =
      trimmedEmail.length == 0 ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".") ||
      trimmedEmail.length > 50;
    const isPhoneInvalid =
      trimmedPhone.length == 0 ||
      digitsOnlyPhone.length < 10 ||
      digitsOnlyPhone.length > 13;
    const isPassInvalid = trimmedPass.length == 0 || trimmedPass.length < 6;

    if (trimmedName.length == 0) {
      setNameErrorMessage("Please enter your full name!");
    } else if (trimmedName.length > 20) {
      setNameErrorMessage("Name can not be that large!");
    } else {
      setNameErrorMessage("");
    }

    if (trimmedEmail.length == 0) {
      setEmailERrorMessage("Please enter your email address!");
    } else if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setEmailERrorMessage("Email must enter a valid email.");
    } else if (trimmedEmail.length > 50) {
      setEmailERrorMessage("Email can not be that large!");
    } else {
      setEmailERrorMessage("");
    }

    if (trimmedPhone.length == 0) {
      setPhoneErrorMessage("Please enter your mobile number!");
    } else if (digitsOnlyPhone.length < 10 || digitsOnlyPhone.length > 13) {
      setPhoneErrorMessage("Enter a valid mobile number");
    } else {
      setPhoneErrorMessage("");
    }

    if (trimmedPass.length == 0) {
      setPassErrorMessage("Please enter a password!");
    } else if (trimmedPass.length < 6) {
      setPassErrorMessage("Password must be at least 6 characters");
    } else {
      setPassErrorMessage("");
    }

    if (isNameInvalid || isEmailInvalid || isPhoneInvalid || isPassInvalid) {
      if (isNameInvalid) {
        nameRef.current?.focus();
      } else if (isEmailInvalid) {
        emailRef.current?.focus();
      } else if (isPhoneInvalid) {
        phoneRef.current?.focus();
      } else if (isPassInvalid) {
        passRef.current?.focus();
      }
    }

    if (
      !isNameInvalid &&
      !isEmailInvalid &&
      !isPhoneInvalid &&
      !isPassInvalid
    ) {
      let { error } = await supabase.from("credentials").insert([
        {
          Password: password,
          Name: fullName,
          Email: email,
          PhoneNum: tele,
        },
      ]);
      if (error) {
        console.error(error.message);
      }
    }

    if (
      isSignUp == "Sign Up" &&
      !isEmailInvalid &&
      !isNameInvalid &&
      !isPassInvalid &&
      !isPhoneInvalid
    ) {
      let { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        console.error(error.message);
      } else {
        let { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          console.error(error.message);
        }
      }
    }

    let { data } = await supabase.from("credentials").select("*");

    data?.map((D) => {
      if (email == D.Email && password == D.Password) {
        setAlreadyAuthenticated("You already have an account");
        setModalDisplay(false);
      }

      if (
        !isNameInvalid &&
        !isEmailInvalid &&
        !isPassInvalid &&
        !isPhoneInvalid &&
        alreadyAuthenticated !== "You already have an account" &&
        password !== D.Password &&
        email !== D.Email
      ) {
        setModalDisplay(true);
        setAlreadyAuthenticated("");
      }
    });
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
          <h1 className="membership-form-title">Create Your Account</h1>
          <p className="membership-form-step">
            Register your plan and continue.
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
          <div
            className="membership-input-group"
            style={
              isNameAndEmailDisplay ? { display: "grid" } : { display: "none" }
            }
          >
            <label className="membership-input-label">Full Name</label>
            <input
              className={`membership-input-control ${
                nameErrorMessage ? "membership-input-control-error" : ""
              }`}
              onChange={handleFNameChange}
              value={fullName}
              type="text"
              placeholder="Enter your full name"
              ref={nameRef}
            />
            <p className="error-message-name">{nameErrorMessage}</p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Email Address</label>
            <input
              className={`membership-input-control ${
                emailErrorMessage ? "membership-input-control-error" : ""
              }`}
              type="email"
              value={email}
              placeholder="Enter your email"
              ref={emailRef}
              onChange={handleEmailChange}
            />
            <p className="error-message-name">{emailErrorMessage}</p>
          </div>

          <div
            className="membership-input-group"
            style={
              isNameAndEmailDisplay ? { display: "grid" } : { display: "none" }
            }
          >
            <label className="membership-input-label">Mobile Number</label>
            <input
              className={`membership-input-control ${
                phoneErrorMessage ? "membership-input-control-error" : ""
              }`}
              onChange={handleTeleChange}
              value={tele}
              type="tel"
              placeholder="Enter mobile number"
              ref={phoneRef}
            />
            <p className="error-message-name">{phoneErrorMessage}</p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Password</label>
            <input
              className={`membership-input-control ${
                passErrorMessage ? "membership-input-control-error" : ""
              }`}
              type="password"
              value={password}
              placeholder="Create password"
              onChange={handlePassChange}
              ref={passRef}
            />
            <p className="error-message-name">{passErrorMessage}</p>
          </div>
        </form>

        <div className="membership-payment-row">
          <span className="membership-payment-note">
            Register now, then confirm your plan with the gym
          </span>
          <button
            className="membership-payment-btn"
            type="button"
            onClick={saveCredentials}
          >
            {isSignUp}
          </button>
          <button
            className="sign-in"
            type="button"
            onClick={
              isSignUp === "Sign Up"
                ? handleSwitchToSignIn
                : handleSwitchToSignUp
            }
          >
            {isSignUp === "Sign Up"
              ? "Already have an account? Sign in"
              : "New here? Sign up"}
          </button>
        </div>
        <div
          className="modal-check-email"
          style={modalDisplay ? { display: "block" } : { display: "none" }}
        >
          <div
            className="modal-check-email-click-layer"
            onClick={removeModalDisplay}
          />
          <div className="modal-check-email-inner">
            <button
              className="modal-check-email-close"
              type="button"
              onClick={removeModalDisplay}
              aria-label="Close check email modal"
            >
              x
            </button>

            <div className="modal-check-email-icon-wrap" aria-hidden="true">
              <div className="modal-check-email-icon">Email</div>
            </div>

            <p className="modal-check-email-eyebrow">Account Verification</p>
            <h2 className="modal-check-email-title">Check your email</h2>
            <p className="modal-check-email-text">
              If your email is valid, we sent a verification message so you can
              activate your account and continue.
            </p>

            <div className="modal-check-email-actions">
              <button
                className="modal-check-email-action"
                type="button"
                onClick={removeModalDisplay}
              >
                Got it
              </button>
            </div>
          </div>
        </div>

        <div className="alreadyHaveAnAccDiv">{alreadyAuthenticated}</div>
      </section>
      <EndBar />
    </main>
  );
};

export default MemberShipPlans;
