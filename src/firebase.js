import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAtpVFELsSTu9l4Go1I8O7sG5aB6ctea9M",
  authDomain: "new-project-a09e7.firebaseapp.com",
  projectId: "new-project-a09e7",
  storageBucket: "new-project-a09e7.appspot.com",
  messagingSenderId: "802014377226",
  appId: "1:802014377226:web:8c8dcaef6ca2305c7276f3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
