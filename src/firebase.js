// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXvphWt8o7KPxwMqQpE8m1TygE-97Pstc",
    authDomain: "hospital-booking-website.firebaseapp.com",
    projectId: "hospital-booking-website",
    storageBucket: "hospital-booking-website.appspot.com",
    messagingSenderId: "60560323740",
    appId: "1:60560323740:web:1fb2b69dbc0db030c9a959",
    measurementId: "G-V1ZDVGTZW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export { app, analytics }
export const db = getFirestore(app)