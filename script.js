/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");
const IMG_OUTPUT = document.getElementById("displayimg");

var GLOBAL_user
var authenticationListener


/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/

function fb_login(){
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
};

function fb_handleLogin(_user){
  if(_user){
    console.log("user is logedined")
    GLOBAL_user = _user 
  } else {
    fb_popupLogin();
    console.log("loging in user")
  };
};

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("log in user")
  })
}

function fb_logout(){
  authenticationListener();
  firebase.auth().signOut();
  console.log("loged out >:) evilness")
}

function resetDatabase(){
  console.log("reseting database")
  users = {
    orange: {
      x: 8,
      y: 0,
      score: 82,
      text: "WaWa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpZSBThXbbwMCqZaa1d8s9GUMl4QRNaTHIQ&s"
    },
    fridge: {
      x: 22,
      y: 83 ,
      score: -7,
      text: "poo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpZSBThXbbwMCqZaa1d8s9GUMl4QRNaTHIQ&s"
    }
  };
  firebase.database().ref("/").set(users)
}

var username = "orange"
var names = Object.keys(users)
console.log(names)

for(i = 0; i < names.length; i++){
  let key = names[i];
  console.log("user " + i + " is " + key)
}

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

function helloWorld4(){
  console.log("Running helloWorld4()")
  firebase.database().ref('/' + username + "/img").set(
    "https://media.tenor.com/4BkLxOmj-_gAAAAj/deltarune-tenna.gif"
  )
};

function helloWorld3(){
  console.log("Running helloWorld23)")
  firebase.database().ref('/' + username).once("value", display, fb_readError)
};

function readData(){
  firebase.database().ref('/' + username).once("value", display, fb_readError)
  console.log("readed database")
};

function readscore(){
  firebase.database().ref('/').once("value", displayscore, fb_readError)
  console.log("readed database")
};

function display(snapshot){
  dbData = snapshot.val();
  console.log(dbData)
  if(dbData == null){
    console.log("nothing")
  } else {
    HTML_OUTPUT.innerHTML = dbData["text"];
    IMG_OUTPUT.src = dbData["img"];
  }
};

function displayscore(snapshot){
  dbData = snapshot.val();
  //console.log(dbData[username]["score"] + " points")
  snapshot.forEach(fb_showOneScore)

};


function fb_showOneScore(child){
  console.log(child.key + " got " + child.val().score)
}

function fb_readError(error){
  console.log("uh oh somthing went very very wrong");
  console.error(error);
};

function fb_readListener(){
  console.log("listen")
  firebase.database().ref('/' + username).on("value", readData)
};



