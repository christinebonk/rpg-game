var inquirer = require("inquirer");
var fs = require('fs');
// var classes = fs.readFileSync('classes.json', 'utf8');
// var words = JSON.parse(classes.characterClasses);
// console.log(words);




// var classes = fs.readFile("classes.json", "utf8", function(error, classes){
// 	var jsonContent = JSON.parse(classes.characterClasses);
// 	console.log(jsonContent);
// });

function Character(n, a) {
	this.name = n,
	this.ability = a
}

function createCharacter(classes) {
	inquirer.prompt([
	{
		type: "input",
		message:"What is your name?",
		name: "name"
	},
	{
		type:"list",
		message:"Choose character class:",
		choices: classes,
		name: "class"
	}
]).then(function(response){
	yourCharacter = new Character(response.name, response.class);
		console.log();
	});
};

createCharacter(classes);