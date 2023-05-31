import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDXJjjm5cdX3yxYAt0mEC7-qZpv7tTqhD8",
  authDomain: "e-shop-1f79a.firebaseapp.com",
  projectId: "e-shop-1f79a",
  storageBucket: "e-shop-1f79a.appspot.com",
  messagingSenderId: "434391785934",
  appId: "1:434391785934:web:64134e2213c21e2375cb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;