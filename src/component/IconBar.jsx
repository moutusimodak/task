import React from "react";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BadgeIcon from "@mui/icons-material/Badge";
import BackupTableIcon from "@mui/icons-material/BackupTable";

const IconBar = ({ page }) => {
  const navigate = useNavigate();


  const allIcons = [
    { id: "person", icon: <Person2Icon fontSize="large" />, navigateTo: "/profile-details" },
    { id: "location", icon: <LocationOnIcon fontSize="large" />, navigateTo: "/address-details" },
    { id: "school", icon: <SchoolIcon fontSize="large" />, navigateTo: "/course-details" },
    { id: "account", icon: <AccountBalanceIcon fontSize="large" /> },
    { id: "badge", icon: <BadgeIcon fontSize="large" /> },
    { id: "backup", icon: <BackupTableIcon fontSize="large" /> },
  ];


  const leftIconIds = {
    profile: ["person"],
    address: ["person", "location"],
    course: ["person", "location", "school"],
  };

  //  left icons 
  const leftIcons = allIcons.filter((icon) => leftIconIds[page]?.includes(icon.id));

  // right icons 
  const rightIcons = allIcons.filter((icon) => !leftIconIds[page]?.includes(icon.id));

 
  const renderIcons = (iconList, isLeftSide = false) =>
    iconList.map((item, index) => (
      <IconButton
        key={index}
        sx={{
          // border: isLeftSide ? "1px solid blue" : "1px solid gray",
          // borderRadius: "50%",
          // color: "gray",
          // width: "40px",
          // height: "40px",
          border: isLeftSide ? "none" : "1px solid blue", 
          borderRadius: "50%",
          color: isLeftSide ? "white" : "gray",        
          backgroundColor: isLeftSide ? "blue" : "transparent",  
          width: "40px",
          height: "40px",
          "&:hover": {
            backgroundColor: isLeftSide ? "blue" : "transparent", 
            borderColor: !isLeftSide ? "blue" : undefined,  
          },

        }}
        onClick={item.navigateTo ? () => navigate(item.navigateTo) : undefined}
      >
        {item.icon}
      </IconButton>
    ));

  return (
    <Box display="flex" justifyContent="space-between" width="100%" mb={-2}>
      {/* Left Side Icons */}
      <Box display="flex" justifyContent="center" gap={2}
     
      >
        {renderIcons(leftIcons, true)}
      </Box>

      {/* Right Side Icons */}
      <Box display="flex" gap={2}>
        {renderIcons(rightIcons)}
      </Box>
    </Box>
  );
};

export default IconBar;
