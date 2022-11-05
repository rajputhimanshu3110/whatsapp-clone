import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/171897776_588472843064153_7498061732071519988_n.jpg?ccb=11-4&oh=01_AdSbFBBUVw2QMnV0w29FHZ4hDxrJx3mIVpYmum1OvKLGwg&oe=6373B1BE" />
        <div className="chat_headerInfo">
          <h3>Avishka 😊</h3>
          <p>Online</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Avishka</span>
          Bde Log
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name">Viraj</span>
          Nhi Sir
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a Message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
