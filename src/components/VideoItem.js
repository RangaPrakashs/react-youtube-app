import React from "react";
import "./VideoItem.css";

const VideoItem = ({ item, onVideoSelect }) => {
	return (
		<div
			className='video-item item'
			onClick={() => {
				onVideoSelect(item);
			}}>
			<img
				className='ui image video-thumbnail'
				alt={item.snippet.title}
				src={item.snippet.thumbnails.medium.url}
			/>
			<div className='content'>
				<div className='header'>{item.snippet.title}</div>
				<div className='description'>{item.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoItem;
