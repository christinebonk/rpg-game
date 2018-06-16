# rpg-gameRPGCharacter
 - name
 - class (link with Class)
 - strength
 - agility
 - defense (%)
 - hp
   - maxHP
   - currentHP
 - mp
   - maxMP
   - currentMP
 - level
 - xp
 - level up
   - xp >= level * 10
   - check class for bonus improvements
   - mp & hp go to full

RPGClass
- name
- starting_hp
- starting_mp
- starting_strength
- starting_agility
- starting_defense
- ability (link with Ability)
- hp_up % when level up
- mp_up % when level up

RPGAbility
 - name
 - attack_points
 - mp_required

 RPGMonster
  - name
  - strength
  - agility
  - defense (%)
  - hp
    - maxHP
    - currentHP
  - mp
    - maxMP
    - currentMP
  - class
  - level
  - xp_to_give (when fight is won)
  - ability (link with Ability)

RPGMonsterBoss
  - name
  - strength
  - agility
  - defense (%)
  - hp
    - maxHP
    - currentHP
  - mp
    - maxMP
    - currentMP
  - class
  - level
  - xp_to_give (when fight is won)
  - ability (link with Ability)
  - attack_multiplier (random_number to * attack by)

1) Create a bunch of monsters
   - Save the JSON to a text file (fs)
2) Create a list of classes
   - Save JSON to a text file (fs)
3) Create a list of abilities
   - Save JSON to a text file (fs)
4) Start the game
   - Create your character
   - Using prompts from the command line
     - Give your character a name
     - Choose from a list the class of character
     - Save your character to disk (fs)
5) Start the battle arena
   - Pick a random monster/boss (that has the same level as your character)
   - Using the Factory Pattern (https://en.wikipedia.org/wiki/Factory_method_pattern) create a monster object
   - Start the fight (using user input + turn based)
     - Attack or use ability
       - If attack random number (Math.rand) * strength - ((Math.rand) * strength * monster.defense)
       - current_HP -= (Math.rand) * strength - ((Math.rand) * strength * monster.defense)
       - If use ability ensure enough mp (if not lose turn)
         - monster.current_HP -= ability.attack_points
         - character.current_MP -= ability.mp_required
     - Monster picks randomly use attack or ability
       - Same as above
   - If win fight 
     - add monster.xp_to_give to character xp
     - Check level_up
     - save your characters state to disk (fs)
     - Pick another monster
   - If lose fight
     - Output Game Over
     - Ask user if they want to start over
     - if so start over at pick character
 6) Modularization
    - Make Monster, Character, Class, Ability modules
    - Rquire those modules in the battle arena file
 7) Save to Firebase
    - Save/Retrieve objects to firebase instead of disk