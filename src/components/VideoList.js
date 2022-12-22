import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ items, onVideoSelect }) => {

	const renderedList = items.map((item) => {
		return <VideoItem onVideoSelect={onVideoSelect} key={item.id.videoId} item={item} />
	})
	return (<div className="ui relaxed divided list">{renderedList}</div>
	);
};

export default VideoList;
