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
        <Avatar src="https://marathi.cdn.zeenews.com/marathi/sites/default/files/2022/11/05/534270-ms-dhoni.jpg" />
        <div className="chat_headerInfo">
          <h3>Sender</h3>
          <p>Last seen at....</p>
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
          <span className="chat_name">Sender</span>
          Some Message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name">Receiver</span>
          Some Message
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
