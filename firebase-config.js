import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWEmiUblBJSk4_oY4EkPDWh1wtMRXyfo4",
  authDomain: "learneasy-social.firebaseapp.com",
  projectId: "learneasy-social",
  storageBucket: "learneasy-social.firebasestorage.app",
  messagingSenderId: "409211768065",
  appId: "1:409211768065:web:6a35c2e9a5a8ded0e05f00",
  measurementId: "G-SP3YXNYRFB"
};

const app = initializeApp(firebaseConfig);
export default app;
