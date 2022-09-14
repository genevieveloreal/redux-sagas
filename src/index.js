import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";
import reducers from "./reducers";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
