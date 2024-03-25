import React, { useState } from "react";
import companyLogo from "../../assests/image/Group 163.jpg";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";

function Sidebar({ show }) {
  const [opensetting, setOpenSetting] = useState(false);

  const menuItems = [
    { icon: <GroupAddIcon />, text: "Home" },
    { icon: <InboxIcon />, text: "Dashboard" },
    { icon: <AutoFixHighIcon />, text: "Attendance" },
    { icon: <SettingsIcon />, text: "Leaves" },
    { icon: <GroupAddIcon />, text: "Employee Directory" },
    { icon: <GroupAddIcon />, text: "Documents" },
    { icon: <GroupAddIcon />, text: "Payroll" },
    { icon: <GroupAddIcon />, text: "Project" },
    { icon: <GroupAddIcon />, text: "Performance" },
    { icon: <GroupAddIcon />, text: "Assets" },
    { icon: <GroupAddIcon />, text: "Careers" }
  ];

  const handleSettingClick = () => {
    setOpenSetting(!opensetting);
  };

  return (
    <div
      className="sidebar_conatiner"
      style={{
        overflowY: "auto",
        maxHeight: "90vh",
        marginTop: "15px",
        padding: "10px",
      }}
    >
      <div className="sidebar_header">
        <div className="info_wrapper">
          <div className="logoIcon">
            <img src={companyLogo} alt="image" />
          </div>
          {show && (
            <div className="info_text-wrapper">
              <p className="info_text">Cloudrevel Innovation</p>
              <p className="info_text2">Chennai India</p>
            </div>
          )}
        </div>
        <List
          sx={{
            width: "100%",
            bgcolor: "transparent",
            display: "flex",
            flexDirection: "column",
            gap: "7px",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {menuItems.map((item, index) => (
            <ListItemButton key={index} sx={{ gap: 4 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {show && <ListItemText primary={item.text} />}
            </ListItemButton>
          ))}
          <ListItemButton onClick={handleSettingClick} sx={{ gap: 4 }}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {show && (
              <>
                <ListItemText primary="Approvals" />
                {opensetting ? <ExpandLess /> : <ExpandMore />}
              </>
            )}
          </ListItemButton>
          <Collapse in={opensetting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4, gap: 4 }}>
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                {show && <ListItemText primary="Other Request" />}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, gap: 4 }}>
                <ListItemIcon>
                  <ManageHistoryIcon />
                </ListItemIcon>
                {show && <ListItemText primary="Other Approvals" />}
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
