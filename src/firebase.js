import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmk8v_YSNqEzFFH2X1tdqIz6LuH-PjFlo",
  authDomain: "fb-clone-9c856.firebaseapp.com",
  projectId: "fb-clone-9c856",
  storageBucket: "fb-clone-9c856.appspot.com",
  messagingSenderId: "72593684612",
  appId: "1:72593684612:web:272640246e05c21dcdead1",
  measurementId: "G-37P18WXCQF"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;