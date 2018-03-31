var firebase = require("firebase");


var config = {
    apiKey: "AIzaSyBbcQLEz3xXtBnPu_FQdmC0MdX-SYeo2SQ",
    authDomain: "makentu-c3a48.firebaseapp.com",
    databaseURL: "https://makentu-c3a48.firebaseio.com",
    storageBucket: "makentu-c3a48.appspot.com",

};
firebase.initializeApp(config);


var express = require('express');
var app = express();
var dataUpdated = 0;

app.get('/', (req, res) => {
    console.log('dd: ' + dataUpdated);
    if(dataUpdated % 2 === 1) res.sendfile('welcome.html');
    else res.sendfile('index.html');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))

var database = firebase.database();
var starCountRef = firebase.database().ref('sleep/');
starCountRef.on('value', function(snapshot) {
    console.log(snapshot.val()); 
    dataUpdated++;
    console.log('dat: ' + dataUpdated);
});
