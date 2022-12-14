import { createAction } from "@reduxjs/toolkit";
import * as types from "../constants/actionTypes";

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
	type: types.ADD_MESSAGE,
	id: nextMessageId++,
	message,
	author,
});

export const addUser = (name) => ({
	type: types.ADD_USER,
	id: nextUserId++,
	name,
});

export const messageReceived = (message, author) => ({
	type: types.MESSAGE_RECEIVED,
	id: nextMessageId++,
	message,
	author,
});

export const populateUsersList = (users) => ({
	type: types.USERS_LIST,
	users,
});

export const fetchDataAction = createAction(types.REQUEST_DATA);
