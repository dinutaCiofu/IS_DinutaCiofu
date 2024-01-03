import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { errorMonitor } from "events";

type User = {
  id?: number; //este optional
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [id, setId] = React.useState<number>();
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onChangeId = (event: any): void => {
    setId(event.target.value);
  };
  const onChangeFirstName = (event: any): void => {
    setFirstName(event.target.value);
  };
  const onChangeLastName = (event: any): void => {
    setLastName(event.target.value);
  };
  const onChangePhoneNumber = (event: any): void => {
    setPhoneNumber(event.target.value);
  };
  const onChangeEmail = (event: any): void => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any): void => {
    setPassword(event.target.value);
  };

  const getUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/findUserByEmail?email=${encodeURIComponent(
          email
        )}`
      );

      // console.log(response.data);
      if (response.data.password === password) {
        login();
      } else {
      }
    } catch (error) {
      console.error("Error getting users data", error);
    }
  };
  const navigate = useNavigate();
  const login = (): void => {
    navigate("/Admin");
  };

  const signup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        newUser
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sign up", error);
    }
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.main}>
      <input
        type="checkbox"
        id={styles.chk}
        aria-hidden="true"
        onChange={handleToggle}
      />
      <div className={styles.signup}>
        <form onSubmit={signup}>
          <label
            className={styles.label}
            htmlFor={styles.chk}
            aria-hidden="true"
          >
            Sign Up
          </label>
          <input
            type="firstname"
            name="firstname"
            placeholder="First Name"
            required={true}
            className={styles.input}
            onChange={onChangeFirstName}
          />
          <input
            type="lastname"
            name="lastaname"
            placeholder="Last Name"
            required={true}
            className={styles.input}
            onChange={onChangeLastName}
          />
          <input
            type="phonenumber"
            name="phonenumber"
            placeholder="Phone Number"
            required={true}
            className={styles.input}
            onChange={onChangePhoneNumber}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            className={styles.input}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required={true}
            className={styles.input}
            onChange={onChangePassword}
          />
          <button className={styles.button}>Sign up</button>
        </form>
      </div>

      <div
        className={styles.login}
        style={isChecked ? { transform: "translateY(-500px)" } : {}}
      >
        <form onSubmit={getUser}>
          <label
            htmlFor={styles.chk}
            aria-hidden={true}
            style={
              isChecked
                ? { transform: "scale(1)" }
                : { transform: "scale(0.6)" }
            }
          >
            Login
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            className={styles.input}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required={true}
            className={styles.input}
            onChange={onChangePassword}
          />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
