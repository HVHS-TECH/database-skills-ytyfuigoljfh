/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
    apiKey: "AIzaSyC4wfoLVnegwQqApMEWhtknFQyXh7oXAB0",
    authDomain: "free-v-bucks-9e966.firebaseapp.com",
    databaseURL: "https://free-v-bucks-9e966-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "free-v-bucks-9e966",
    storageBucket: "free-v-bucks-9e966.firebasestorage.app",
    messagingSenderId: "930897563653",
    appId: "1:930897563653:web:1006854448e5fc56fccc6c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
