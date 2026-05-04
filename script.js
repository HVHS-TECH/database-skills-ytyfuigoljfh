/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");
const IMG_OUTPUT = document.getElementById("displayimg");


/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/

users = {
  orange: {
    x: 0,
    y: 0,
    score: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpZSBThXbbwMCqZaa1d8s9GUMl4QRNaTHIQ&s"
  },
  fridge: {
    x: 22,
    y: 83 ,
    score: -7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpZSBThXbbwMCqZaa1d8s9GUMl4QRNaTHIQ&s"
  }
};

firebase.database().ref("/").set(users)

var username = "orange"

function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/' + username + "/img").set(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpXtHm8mlOTucpO4JcfzPoCETqxS3w38lnw&s"
  )
};

function helloWorld2(){
  console.log("Running helloWorld2()")
  firebase.database().ref('/' + username + "/img").set(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpZSBThXbbwMCqZaa1d8s9GUMl4QRNaTHIQ&s"
  )
};

function readData(){
  firebase.database().ref('/' + username + "/img").once("value", display, fb_readError)
  console.log("readed database")
};

function display(snapshot){
  dbData = snapshot.val();
  if(dbData == null){
    console.log("nothing")
  } else {
    HTML_OUTPUT.innerHTML = snapshot.val();
    IMG_OUTPUT.src = snapshot.val();
  }
};

function fb_readError(error){
  console.log("uh oh somthing went very very wrong");
  console.error(error);
};

function fb_readListener(){
  console.log("listen")
  firebase.database().ref('/' + username + "/img").on("value", readData)
};