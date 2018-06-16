var fs = require('fs');

fs.readFile("abilities.json", "utf8", function(error, data){
    console.log(data);
});

fs.readFile("classes.json", "utf8", function(error, data){
    console.log(data);
});



