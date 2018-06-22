var fs = require("fs");
var inquirer = require("inquirer");
var yourCharacter;
var classObject;
var abilitiesObject;
var selectedMonster 


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

fs.readFile("abilities.txt", "utf8", function(error,data) {
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
	var classes = Object.keys(classObject);	
	createCharacter(classes);
});

function chooseMonster() {
	fs.readFile("Monsterinos.txt", "utf8", function(error, data){
	if(error){
		return console.log(error);
	};
		var monsterObject = JSON.parse(data);
		var monsters = Object.keys(monsterObject);	
		selectedMonster = monsterObject[monsters[0]];
		console.log(selectedMonster); 
		console.log("You will be fighting " + selectedMonster.name)
		battling();        
	});
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
	var classChoice = response.class;

	var yourClass = classObject[classChoice];
	yourCharacter = new characterConstructor(response.name, yourClass.strength, yourClass.defence, yourClass.hp, yourClass.mp, classChoice, yourClass.ability, yourClass.agility);
	yourCharacter.ability = abilitiesObject[yourCharacter.ability];
	console.log("Welcome " + yourCharacter.name + "! Here are your character stats:");
	console.log(yourCharacter);
	chooseMonster();
	//get the monster
});
}

//makes them fight :(

function attack(char1, char2) {
	var attack = char1.strength * Math.random();
	var defence = char2.defence * attack + char2.agility * attack;
	var totalDamage = attack - defence;
	char2.currentHP -= totalDamage; 
	console.log(char1.name + " hit " + char2.name + " for " + totalDamage)
	console.log(char2.name + " is now at " + char2.currentHP)
}

function ability(char1, char2) {
	if(char1.ability.mp_required < char1.currentMP) {
		char2.currentHP -= char1.ability.attack_points;
		console.log(char1.name + " hit " + char2.name + " with " + char1.ability.name + " for " + char1.ability.attack_points)

		console.log(char2.name + " is now at " + char2.currentHP);
	} else {
		console.log("You do not have enough mana")
	}
}

// function battle (char1, char2, action) {
// 	action(char1, char2);
// }

function battling() {
	if(selectedMonster.currentHP <= 0){
		chooseMonster();
	}

	inquirer.prompt([
	{
		type:"list",
		message:"What action do you want to do?:",
		choices: ["attack", "ability"],
		name: "characterChoice"
	}
]).then(function(response){
	if(response.characterChoice === "attack") {
		attack(yourCharacter,selectedMonster);
	}else{
		ability(yourCharacter,selectedMonster);
	}
	battling();
});
}


