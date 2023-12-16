import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const getUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const email = "dinutaciofu@gmail.com";
      const response = await axios.get(
        `http://localhost:8081/findUserByEmail?email=${encodeURIComponent(
          email
        )}`
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error getting users data", error);
    }
  };
  // useEffect(() => {
  //   const getUser = async () => {
  //     // console.log("clicked");
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8081/findUserByEmail"
  //       );

  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error getting users data", error);
  //     }
  //   };
  //   getUser();
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8081/findUserByEmail")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       console.log(resData);
  //     });
  // }, []);

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
        <form>
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
          />
          <input
            type="lastname"
            name="lastaname"
            placeholder="Last Name"
            required={true}
            className={styles.input}
          />
          <input
            type="phonenumber"
            name="phonenumber"
            placeholder="Phone Number"
            required={true}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            className={styles.input}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required={true}
            className={styles.input}
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
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required={true}
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
