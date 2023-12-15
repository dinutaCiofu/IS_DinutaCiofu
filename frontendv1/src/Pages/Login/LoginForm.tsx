import React, { useState } from "react";
import styles from "./Login.module.css";
const LoginForm: React.FC = () => {
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
        <form>
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
