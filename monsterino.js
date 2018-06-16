function monster(name,strength,defense,maxHP,currentHP,maxMP,currentMP,Class,level,xp_to_give,ability,sound){
if(!new.target){return;}
// console.log(arguments);
this.name = name.toString();

this.strength= parseInt(strength);
this.defense= parseInt(defense);
var maxHP= parseInt(maxHP);
this.currentHP=parseInt(currentHP);
var maxMP=parseInt(maxMP);
this.currentMP=parseInt(currentMP),
this.Class=Class.toString();
this.level=parseInt(level);
this.xp_to_give=parseInt(xp_to_give);
this.ability=ability.toString();
this.sound=sound.toString();
this.chosen=false;

this.noise = function(){
    if(this.chosen){
        console.log(this.sound);
    }
};
};

var Cube = new monster("The Gelatinous Cube",30,90,120,120,30,30,"blob",5,80,"consume","Slorp...fllwp..slshh...");
var Wolf = new monster("Werewolf Fledgling",90,30,200,200,20,20,"werewolf",7,150,"Monster Mash","Grrrrr...Aroo");
var Spider= new monster("House Spider",10,2,50,50,90,90,"spider",1,50,"mindcontrol","Please don't kill me...I have a life to live");
var Gob = new monster("Hazma the Defiler",75,55,200,200,200,200,"goblin",10,250,"slap","Hrooookkk!! I will feed on your flesh!");

function BossCheck(){
    if(maxHP > 150){
        Gob.attackMulti=function(){
            var dmg= Math.floor((Math.random()*2)+1);
        }
    }
};

var fs = require("fs");
var CubeStr= JSON.stringify(Cube,null,4);
var WolfStr= JSON.stringify(Wolf,null,4);
var SpiderStr= JSON.stringify(Spider,null,4);
var GobStr=JSON.stringify(Gob,null,4);

fs.writeFile("Monsterinos.txt",CubeStr, function(err) {

 
  if (err) {
    return console.log(err);
  }

  console.log("Monsterino Updated.");

});

var MonstArr=[WolfStr,SpiderStr,GobStr];

for(i=0; i< MonstArr.length;i++){


fs.appendFile("Monsterinos.txt",MonstArr[i], function(err) {

    if (err) {
      console.log(err);
    }
  
    
    else {
      console.log("Content Added!");
    }
  
  });
}
