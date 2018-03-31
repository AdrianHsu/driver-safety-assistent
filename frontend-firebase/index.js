var http = require('http');
var fileSystem = require('fs');
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBbcQLEz3xXtBnPu_FQdmC0MdX-SYeo2SQ",
    authDomain: "makentu-c3a48.firebaseapp.com",
    databaseURL: "https://makentu-c3a48.firebaseio.com",
    storageBucket: "makentu-c3a48.appspot.com",

};
firebase.initializeApp(config);

var database = firebase.database();
var starCountRef = firebase.database().ref('ee/');
starCountRef.on('value', function(snapshot) {
    console.log(snapshot.val());    
});

var server = http.createServer(function(req, resp){
    fileSystem.readFile('./index.html', function(error, fileContent){
        if(error){
            resp.writeHead(500, {'Content-Type': 'text/plain'});
            resp.end('Error');
        }
        else{
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(fileContent);
            resp.end();
        }
    });
});

server.listen(8080);

console.log('Listening at: localhost:8080');