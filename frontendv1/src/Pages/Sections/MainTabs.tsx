import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children} </Box>}
    </div>
  );
};

interface MainTabsProps {
  onTabChange: (newValue: number) => void;
}

const MainTabs: React.FC<MainTabsProps> = ({ onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Box sx={{ marginRight: "50px" }}>
      <Tabs value={value} onChange={handleChange} sx={{ marginTop: "20px" }}>
        <Tab label="Program" />
        <Tab label="Movies" />
        <Tab label="My Account" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Componenta pentru program */}
        {/* <Typography>Program</Typography> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Componenta pentru filme */}
        {/* <Typography>Movies</Typography> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Componenta pentru contul meu */}
        {/* <Typography>My Account</Typography> */}
      </TabPanel>
    </Box>
  );
};

export default MainTabs;
