import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBaBtfI2z0sgzHWRuPy1Jy4loa_Sifkzyk",
    authDomain: "crud-react-f2c9b.firebaseapp.com",
    databaseURL: "https://crud-react-f2c9b.firebaseio.com",
    projectId: "crud-react-f2c9b",
    storageBucket: "crud-react-f2c9b.appspot.com",
    messagingSenderId: "401081855566",
    appId: "1:401081855566:web:9a206acfaaf8ce41d8dd1f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();