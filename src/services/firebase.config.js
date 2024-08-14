import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCESAp0GxXN6DMY05TUBC-HtekWpB7IPkU",
  authDomain: "luxe-view.firebaseapp.com",
  projectId: "luxe-view",
  storageBucket: "luxe-view.appspot.com",
  messagingSenderId: "141529276343",
  appId: "1:141529276343:web:5b6ad362b972e34500d232",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
