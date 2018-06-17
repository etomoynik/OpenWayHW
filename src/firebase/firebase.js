import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyDxSKxtRnzbCP031uw0VQUUGh6Wsig04FQ",
  authDomain: "test-5a5d4.firebaseapp.com",
  databaseURL: "test-5a5d4.firebaseio.com",
  projectId: "test-5a5d4",
  storageBucket: '',
  messagingSenderId: "517934419347",
};

const devConfig = {
  apiKey: "AIzaSyDxSKxtRnzbCP031uw0VQUUGh6Wsig04FQ",
  authDomain: "test-5a5d4.firebaseapp.com",
  databaseURL: "test-5a5d4.firebaseio.com",
  projectId: "test-5a5d4",
  storageBucket: '',
  messagingSenderId: "517934419347",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
  firebase,
};
