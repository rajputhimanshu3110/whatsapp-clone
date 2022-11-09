import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://marathi.cdn.zeenews.com/marathi/sites/default/files/2022/11/05/534270-ms-dhoni.jpg" />
      <div className="sidebarChat_info">
        <h2>Sender</h2>
        <p>Last Message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
