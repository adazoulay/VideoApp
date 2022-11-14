import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBls1YwTlus8-ez8wwyJmyYHDEykIXUeJM",
  authDomain: "video-8a99e.firebaseapp.com",
  projectId: "video-8a99e",
  storageBucket: "video-8a99e.appspot.com",
  messagingSenderId: "572322584837",
  appId: "1:572322584837:web:ce3691161fbf95af88bf6c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
