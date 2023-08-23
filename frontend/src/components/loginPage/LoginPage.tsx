import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    if (value.trim() === "") {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setFirstName(value);
    if (value.trim() === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (firstName.trim() === "") {
      setFirstNameError(true);
      return;
    }
    if (phoneNumber.trim() === "") {
      setPhoneNumberError(true);
      return;
    }
    if (password.length < 8) {
      setPasswordError(true);
      return;
    }
    const user = {
      firstName,
      lastName,
      phoneNumber,
      password,
    };
    fetch("http://localhost:3001/save-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="login">
      <div className="login__avatar">
        <img
          src="https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-594.jpg?w=740"
          alt="Avatar"
        />
      </div>
      <h2 className="login__title">Login</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form-group">
          <label className="login__form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className={`login__form-input ${
              firstNameError ? "login__form-input--error" : ""
            }`}
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {firstNameError && (
            <span className="login__form-error">First Name is required</span>
          )}
        </div>
        <div className="login__form-group">
          <label className="login__form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="login__form-input"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="login__form-group">
          <label className="login__form-label" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            className={`login__form-input ${
              phoneNumberError ? "login__form-input--error" : ""
            }`}
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {phoneNumberError && (
            <span className="login__form-error">Phone Number is required</span>
          )}
        </div>
        <div className="login__form-group">
          <label className="login__form-label" htmlFor="password">
            Password:
          </label>
          <input
            className={`login__form-input ${
              passwordError ? "login__form-input--error" : ""
            }`}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <span className="login__form-error">
              Password must be at least 8 characters long
            </span>
          )}
        </div>
        <button className="login__form-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
