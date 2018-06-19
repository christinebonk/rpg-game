var fs = require("fs");
var inquirer = require("inquirer");
var yourCharacter;
var classObject;


characterConstructor = function(n,s,d,ch,cm,c,a,g) {
	if(!new.target){return;}
	this.name = n.toString();
	this.strength= parseInt(s);
	this.defence= parseFloat(d);
	this.maxHP= 200;
	this.currentHP=parseInt(ch);
	this.maxMP=20;
	this.currentMP=parseInt(cm),
	this.Class=c.toString();
	this.level=1;
	this.ability=a.toString();
	this.agility=parseFloat(g);
}

fs.readFile("abilities.json", "utf8", function(error,data) {
	if(error) {
		return console.log(error);
	};
	abilitiesObject = JSON.parse(data);
});

fs.readFile("classes.txt", "utf8", function(error,data) {
	if(error) {
		return console.log(error);
	};
	classObject = JSON.parse(data);
	console.log(classObject)
	var classes = Object.keys(classObject);	
	createCharacter(classes);
});

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
	var classChoice = response.class;
	var yourClass = classObject[classChoice];
	yourCharacter = new characterConstructor(response.name, yourClass.strength, yourClass.defence, yourClass.hp, yourClass.mp, classChoice, yourClass.ability, yourClass.agility);
	yourCharacter.ability = abilitiesObject[yourCharacter.ability];
	
});
}



