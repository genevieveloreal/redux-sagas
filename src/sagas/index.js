import { put, takeEvery, all, call } from "redux-saga/effects";
import axios from "axios";
import { REQUEST_DATA, RECEIVE_DATA } from "../constants/actionTypes";

// Fake delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchData() {
	yield delay(1000);
	try {
		const { data } = yield call(
			axios.get,
			"https://jsonplaceholder.typicode.com/users"
		);
		yield put({ type: RECEIVE_DATA, payload: { users: data } });
	} catch (e) {
		console.log(e.message);
	}
}

function* watchFetchData() {
	yield takeEvery(REQUEST_DATA, fetchData);
}

// This is a single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([watchFetchData()]);
}
