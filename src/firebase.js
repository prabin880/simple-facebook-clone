import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAbJjqXjX6r7Pu_VHKnD_tgc6k21RMR6gw',
	authDomain: 'facebook-clone-1f2b5.firebaseapp.com',
	databaseURL: 'https://facebook-clone-1f2b5.firebaseio.com',
	projectId: 'facebook-clone-1f2b5',
	storageBucket: 'facebook-clone-1f2b5.appspot.com',
	messagingSenderId: '960607524503',
	appId: '1:960607524503:web:adaba153ee7a3185bcbbd2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
