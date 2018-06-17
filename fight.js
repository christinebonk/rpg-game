function attack(char1, char2) {
	var attak = char1.strength * Math.random();
	var defence = char2.defence * attack + char2.agility * attack;
	var totalDamage = attack - defence;
	char2.hp -= totalDamage; 
}

function ability(char1, char2) {
	if(char1.ability.mp == char1.mp) {
		char2.hp -= char1.ability.attack_points;
	} else {
		console.log("You do not have enough manna")
	}
}

function battle (char1, char2, action) {
	action(char1, char2);
}