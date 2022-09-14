import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import example from "./example";

const chat = combineReducers({ messages, users, example });

export default chat;
