import { useState } from "react";
import {
  loginButtonStyle,
  parentDivStyle,
  textFieldStyle,
} from "./Login.styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { text } from "stream/consumers";

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div style={parentDivStyle}>
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
        id="password-field"
        defaultValue=""
        variant="filled"
        size="small"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button style={loginButtonStyle} variant="outlined">
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
