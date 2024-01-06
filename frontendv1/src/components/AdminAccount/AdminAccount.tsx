import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { buttonStyle, formContainerStyle } from "./AdminAccount.styles";

type AdminAccountProps = {
  onCancel: () => void;
  userId: number; // Assuming you have the ID of the logged-in administrator
};

const AdminAccount: React.FC<AdminAccountProps> = ({ onCancel, userId }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Fetch user details based on userId
    axios
      .get(`http://localhost:8080/findUserById/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details", error);
      });
  }, [userId]);

  const handleInputChange = (fieldName: string, value: string) => {
    setUserData({
      ...userData,
      [fieldName]: value,
    });
  };

  const handleFormSubmit = () => {
    // Update user details in the backend
    axios
      .put(`http://localhost:8080/updateUser/${userId}`, userData)
      .then((response) => {
        console.log("User details updated successfully", response.data);
        alert("User details updated successfully");
        onCancel();
      })
      .catch((error) => {
        console.error("Error updating user details", error);
      });
  };

  return (
    <Paper style={formContainerStyle}>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        My Account
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <TextField
          label="First Name"
          value={userData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
        />
        <TextField
          label="Last Name"
          value={userData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
        />
        <TextField
          label="Phone Number"
          value={userData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
        />
        <TextField
          label="Email"
          value={userData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
        />
        <TextField
          label="Password"
          value={userData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          //   type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
        />

        <Button type="submit" variant="contained" style={buttonStyle}>
          Save Changes
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={onCancel}
          style={buttonStyle}
        >
          Sign out
        </Button>
      </form>
    </Paper>
  );
};

export default AdminAccount;
