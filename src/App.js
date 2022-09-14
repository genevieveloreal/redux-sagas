import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";
import { fetchDataAction } from "./actions";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Using redux toolkit action creator
		dispatch(fetchDataAction());

		// Using vanilla redux action
		// dispatch({ type: "FETCH_DATA" });

		console.log("Fetching data complete");
	}, [dispatch]);

	return (
		<div id="container">
			<Sidebar />
			<section id="main">
				<MessagesList />
				<AddMessage />
			</section>
		</div>
	);
};

export default App;
