import React from "react";

export const parentDivStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

export const loginButtonStyle: React.CSSProperties = {
  marginTop: 20,
  backgroundColor: "#20043d",
  color: "#ebefef",
  border: "#20043d",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  cursor: "default",
  transition: "all 0.2s ease-in-out",
};

export const textFieldStyle: React.CSSProperties = {
  marginTop: 20,
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: "1rem",
  background: "#2f1d43",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "white",
  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))",
};

export const htmlStyle: React.CSSProperties = {
  fontFamily: '"Quicksand", sans-serif',
  color: "#ebe7ef",
  background: "linear-gradient( #20043d,#7F28B6, #9945CF)",
  fontSynthesis: "none",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
  minHeight: "80rem",
};

export const headerStyle: React.CSSProperties = {
  textAlign: "center",
  // margin: "3rem 0",
};
