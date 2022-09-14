import * as types from "../constants/actionTypes";

const example = (state = [], action) => {
	switch (action.type) {
		case types.REQUEST_DATA: {
			return {
				...state,
				isLoading: true,
			};
		}
		case types.RECEIVE_DATA:
			return action.payload.users;
		default:
			return state;
	}
};

export default example;
