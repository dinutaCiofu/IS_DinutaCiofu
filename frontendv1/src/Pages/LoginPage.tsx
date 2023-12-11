import { useState } from "react";
import {
  headerStyle,
  htmlStyle,
  loginButtonStyle,
  parentDivStyle,
  textFieldStyle,
} from "./Login.styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const combinedDivStyles = { ...htmlStyle, ...parentDivStyle };
  return (
    <section style={combinedDivStyles}>
      <h1 style={headerStyle}>Sign in</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <TextField
          style={textFieldStyle}
          label="Email"
          id="email-field"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          style={textFieldStyle}
          label="Password"
          id="standard-password-input"
          type="password"
          // id="password-field"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button style={loginButtonStyle} variant="outlined">
          Login
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
