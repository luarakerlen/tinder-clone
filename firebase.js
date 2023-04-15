// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAIBSeNq2OyjXvJbnW78me7dCwi7h11kww',
	authDomain: 'tinder-clone-383814.firebaseapp.com',
	projectId: 'tinder-clone-383814',
	storageBucket: 'tinder-clone-383814.appspot.com',
	messagingSenderId: '648392820231',
	appId: '1:648392820231:web:6e038d779fc8d95ee04ca2',
	measurementId: 'G-2SRN5W123G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
