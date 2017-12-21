import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_KEY_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_KEY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_KEY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_KEY_SENDER_ID
};

const app = firebase.initializeApp(config);
const base = Rebase.creacteClass(app.database);

export { base };
