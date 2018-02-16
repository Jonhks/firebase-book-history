// Initialize Firebase
var config = {
  apiKey: "AIzaSyAL3MGu4LXK5KzgfWUdmy43vkDx86toMIs",
  authDomain: "libro-visitas-laboratoria.firebaseapp.com",
  databaseURL: "https://libro-visitas-laboratoria.firebaseio.com",
  projectId: "libro-visitas-laboratoria",
  storageBucket: "",
  messagingSenderId: "641591275896"
};

firebase.initializeApp(config);

var commentsRef = firebase.database().ref("comments/");

commentsRef.on("value", function(snapshot) {
  console.log("se hizo un cambio");
});

function writeComment() {
  commentsRef.push({ content: "test" });
}

function updateTest() {
  commentsRef.update({ 1: { content: "bye" } });
}

function deleteTest() {
  firebase
    .database()
    .ref("comments/0")
    .remove(function() {
      console.log("done");
    });
}
