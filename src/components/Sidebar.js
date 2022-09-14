import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
	const users = useSelector((state) => state.example);
	const hasData = users.length > 0;
	const isLoading = users.isLoading;

	const renderUsers = () => {
		if (hasData) {
			return (
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			);
		}
		return null;
	};

	return (
		<aside id="sidebar" className="sidebar">
			<h3>Users</h3>
			<br />
			{isLoading ? <p>Loading...</p> : renderUsers()}
		</aside>
	);
};

export default Sidebar;
