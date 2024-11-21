import React from "react";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import personImage from "../assets/person.png";
import empImage from "../assets/emp.png";
import bankImage from "../assets/bank.png";
import documentImage from "../assets/document.png";

const IconBar = ({ page }) => {
  const navigate = useNavigate();

  const allIcons = [
    {
      id: "person",
      icon: <img src={personImage} />,
      navigateTo: "/profile-details",
    },
    {
      id: "location",
      icon: <LocationOnIcon />,
      navigateTo: "/address-details",
    },
    { id: "school", icon: <SchoolIcon />, navigateTo: "/course-details" },
    { id: "account", icon: <img src={empImage} /> },
    { id: "badge", icon: <img src={bankImage} /> },
    { id: "backup", icon: <img src={documentImage} /> },
  ];

  const leftIconIds = {
    profile: ["person"],
    address: ["person", "location"],
    course: ["person", "location", "school"],
  };

  const getBackgroundColor = (iconId) => {
    if (leftIconIds[page]?.includes(iconId)) {
      const currentPageIndex = leftIconIds[page].indexOf(iconId);
      const lastIndex = leftIconIds[page].length - 1;

      if (page === "profile" && iconId === "person") {
        return "#282AAE";
      }

      return currentPageIndex === lastIndex ? "#c8c9f4" : "#282AAE";
    }
    return "transparent";
  };

  const getBorderColor = (iconId) => {
    return getBackgroundColor(iconId) === "#ADD8E6" ? "#282AAE" : "transparent";
  };

  //  left icons
  const leftIcons = allIcons.filter((icon) =>
    leftIconIds[page]?.includes(icon.id)
  );

  // right icons
  const rightIcons = allIcons.filter(
    (icon) => !leftIconIds[page]?.includes(icon.id)
  );

  const renderIcons = (iconList, isLeftSide = false) =>
    iconList.map((item, index) => (
      <IconButton
        key={index}
        sx={{
          border: `1px solid ${isLeftSide ? getBorderColor(item.id) : "gray"}`,
          borderRadius: "50%",
          color: isLeftSide ? "white" : "gray",
          backgroundColor: isLeftSide
            ? getBackgroundColor(item.id)
            : "transparent",
          borderColor: "gray",
          width: "40px",
          height: "40px",
          "&:hover": {
            backgroundColor: isLeftSide
              ? getBackgroundColor(item.id)
              : "transparent",
          },
        }}
        onClick={item.navigateTo ? () => navigate(item.navigateTo) : undefined}
      >
        {item.icon}
      </IconButton>
    ));

  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      {/* Left Side Icons */}
      <Box display="flex" justifyContent="center" gap={2}>
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
