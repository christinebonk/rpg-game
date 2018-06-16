var inquirer = require("inquirer");

var classes = ["great", "fine", "no"];

function Character(n, a) {
	this.name = n,
	this.ability = a
}

function createCharacter(classes) {
	inquirer.prompt([
	{
		type:"input",
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