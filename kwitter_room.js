
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBH1DRtESWoOVa3cf9bWCi2WcXB9Yd-pyo",
      authDomain: "class-app-cf01a.firebaseapp.com",
      databaseURL: "https://class-app-cf01a-default-rtdb.firebaseio.com",
      projectId: "class-app-cf01a",
      storageBucket: "class-app-cf01a.appspot.com",
      messagingSenderId: "879703073970",
      appId: "1:879703073970:web:4c7c27d30737f0458dd5ab"
    };
    firebase.initializeApp(config);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
