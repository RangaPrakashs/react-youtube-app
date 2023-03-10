import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = ({ query }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(query || "krishna");
	}, [query]);

	const search = async (query) => {
		const response = await youtube.get("/search", {
			params: {
				q: query,
			},
		});
		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;
