// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics, getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFireBase() {  
  const firebaseConfig = {
  apiKey: "AIzaSyDbXgdMcqkyKpUZ_R1FTwIQdpcv_pZrYCo",
  authDomain: "diennuoc-9bba6.firebaseapp.com",
  databaseURL: "https://diennuoc-9bba6-default-rtdb.firebaseio.com",
  projectId: "diennuoc-9bba6",
  storageBucket: "diennuoc-9bba6.appspot.com",
  messagingSenderId: "491479195990",
  appId: "1:491479195990:web:fdc20dd52c18721fffb6f7",
  measurementId: "G-PD6HE1Q7Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app)
} 
export default StartFireBase
