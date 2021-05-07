import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCZwpByIbWA5reh69ewiefJA1XLzp-wbho",
    authDomain: "story-hub-ec79c.firebaseapp.com",
    projectId: "story-hub-ec79c",
    storageBucket: "story-hub-ec79c.appspot.com",
    messagingSenderId: "197165101488",
    appId: "1:197165101488:web:b35aaae132acf3501be675"
  };
  if(firebase.apps.length === 0) {
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();