import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/171897776_588472843064153_7498061732071519988_n.jpg?ccb=11-4&oh=01_AdSbFBBUVw2QMnV0w29FHZ4hDxrJx3mIVpYmum1OvKLGwg&oe=6373B1BE" />
      <div className="sidebarChat_info">
        <h2>Avishka 😊</h2>
        <p>Nhi sir iss sem nhi aata</p>
      </div>
    </div>
  );
}

export default SidebarChat;
