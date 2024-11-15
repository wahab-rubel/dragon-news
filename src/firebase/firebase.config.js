// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSL-uRUg7zHA5V-INgIn970LEQfeFBjh4",
  authDomain: "dragon-news-30b1c.firebaseapp.com",
  projectId: "dragon-news-30b1c",
  storageBucket: "dragon-news-30b1c.firebasestorage.app",
  messagingSenderId: "814370222999",
  appId: "1:814370222999:web:c94428ccaf3daf04000ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app