var fs = require('fs');
var createCharacter = require('./create-character.js');

fs.readFile("abilities.json", "utf8", function(error, abilitiesData){
    console.log(data);
});

fs.readFile("classes.json", "utf8", function(error, classesData){
    console.log(classesData);
});

console.log(abilitiesData);



