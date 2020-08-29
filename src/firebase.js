import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCEulI7echOm4_H-oiaFTll8WjpzYir_hA",
    authDomain: "portfolio-blog-ec32c.firebaseapp.com",
    databaseURL: "https://portfolio-blog-ec32c.firebaseio.com",
    projectId: "portfolio-blog-ec32c",
    storageBucket: "portfolio-blog-ec32c.appspot.com",
    messagingSenderId: "779653228014",
    appId: "1:779653228014:web:11006a8019459c9c299aff",
    measurementId: "G-M6NX2431JB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore()

  export default firebase;