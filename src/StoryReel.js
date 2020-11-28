import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
	return (
		<div className="storyReel">
			<Story
				image="https://upload.wikimedia.org/wikipedia/commons/f/f9/STS-130_exhaust_cloud_engulfs_Launch_Pad_39A.jpg"
				profileSrc=""
				title="First User"
			/>
			<Story
				image="https://upload.wikimedia.org/wikipedia/commons/f/f9/STS-130_exhaust_cloud_engulfs_Launch_Pad_39A.jpg"
				profileSrc=""
				title="First User"
			/>
			<Story
				image="https://upload.wikimedia.org/wikipedia/commons/f/f9/STS-130_exhaust_cloud_engulfs_Launch_Pad_39A.jpg"
				profileSrc=""
				title="First User"
			/>
			<Story
				image="https://upload.wikimedia.org/wikipedia/commons/f/f9/STS-130_exhaust_cloud_engulfs_Launch_Pad_39A.jpg"
				profileSrc=""
				title="First User"
			/>
		</div>
	);
};

export default StoryReel;
