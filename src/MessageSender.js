import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

const MessageSender = () => {
	const [{ user }, dispatch] = useStateValue();
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		});

		setInput('');
		setImageUrl('');
	};

	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						className="messageSender__input"
						placeholder={`What's on your mind?, ${user.displayName}`}
						type="text"
					/>
					<input
						value={imageUrl}
						onChange={e => setImageUrl(e.target.value)}
						placeholder="Image URL (Optional)"
						type="text"
					/>
					<button onClick={handleSubmit} type="submit">
						Hidden Submit
					</button>
				</form>
			</div>

			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideoCamIcon style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MessageSender;