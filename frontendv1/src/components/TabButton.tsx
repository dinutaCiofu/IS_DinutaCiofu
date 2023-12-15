import React from "react";
import Button from "@mui/material/Button";

interface TabButtonProps {
  onSelect: () => void;
  isSelected: boolean;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = (props): JSX.Element => {
  return (
    <Button
      size="small"
      color="inherit"
      onClick={props.onSelect}
      variant="contained"
      style={{
        backgroundColor: props.isSelected
          ? "rgba(0, 0, 0, 0.5)"
          : "transparent",

        marginRight: "9px",
      }}
    >
      {props.children}
    </Button>
  );
};
export default TabButton;
