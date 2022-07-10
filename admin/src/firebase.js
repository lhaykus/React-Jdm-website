//Got code from creating my firebase project on firebase.com

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhf4qDhR4Vl69XDS4Y533WVxD584FYj3U",
  authDomain: "jdm-website-8304b.firebaseapp.com",
  projectId: "jdm-website-8304b",
  storageBucket: "jdm-website-8304b.appspot.com",
  messagingSenderId: "200676888130",
  appId: "1:200676888130:web:988e83ee67fc2004d2a7db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;