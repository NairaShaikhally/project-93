var firebaseConfig = {
      apiKey: "AIzaSyACrZgQ1fpcSpv5NBVzPsLR8DlesaNRx8M",
      authDomain: "kwitter-2817f.firebaseapp.com",
      databaseURL: "https://kwitter-2817f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2817f",
      storageBucket: "kwitter-2817f.appspot.com",
      messagingSenderId: "473290975150",
      appId: "1:473290975150:web:65effd2266d709413f0a3f"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
