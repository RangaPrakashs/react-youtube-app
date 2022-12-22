import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState("");

	return (
		<div className='search-bar ui segment'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(query);
				}}
				className='ui form'>
				<div className='field'>
					<label>Search to view Youtube Videos</label>
					<input
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						type='text'
						value={query}></input>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
