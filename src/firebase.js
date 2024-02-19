// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFg5TU1FepNmbGg842LgnU0SJiJ5WwvCk",
  authDomain: "topicly-org.firebaseapp.com",
  databaseURL: "https://topicly-org-default-rtdb.firebaseio.com/",
  projectId: "topicly-org",
  storageBucket: "topicly-org.appspot.com",
  messagingSenderId: "368047186183",
  appId: "1:368047186183:web:0829802c4723b03f2325a2",
  measurementId: "G-JZR3MNX6CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);