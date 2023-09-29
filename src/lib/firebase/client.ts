import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBAQowyqr15ni-AvuK2jYz_1H32W3bjaWw',
	authDomain: 'eonclub-cd2a2.firebaseapp.com',
	projectId: 'eonclub-cd2a2',
	storageBucket: 'eonclub-cd2a2.appspot.com',
	messagingSenderId: '900451634653',
	appId: '1:900451634653:web:5bc07308762c08544c7a34'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
