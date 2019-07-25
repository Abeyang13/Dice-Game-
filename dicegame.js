"use strict";
/*
- Name of game and concept (RPG turn base game) 
- (rolling dices to do certain things (Regular attacks, Defend or healing potion, using magic or spells, skipping))
- have to have 6 different dices with more than 3 sides on each dice
- the objective of the game is to have a character attack an objective and dps it to until dps200 is brought down to 0
- once the ojective is brought down to 0.  have it say "victory"
- if the character don't get it down to 0 in a certain amount of rolls then it will say "failed"
- dice4, dice6, dice8, dice10, dice12, dice20
- dice4 = attack 1-4
- dice6 = attack 1-6
- dice8 = attack 1-8
- dice10 = attack 1-10
- dice12 = attack 1-12
- dice20 = attack 1-20
//
//
- how the dices will roll
- 2 dices randomly selected, rolls and the total will equal the attack
after that i want to subtract 100 to whatever the attack is.  exp(100 - total of dice6 and dice8)
- then repeat it again 
- after a certain amount of rolls.  if the team don't get the objective down to 0.  
the game will say "fail" and the game will end
- if they reach the objective then it will say "victory" and the game will end

function rpgGame(dice1,dice2)
	
	let totalDice = dice1 + dice2
	let dices = [dice4[1,2,3,4], dice6[1,2,3,4,5,6], dice8[1,2,3,4,5,6,7,8], dice10[1,2,3,4,5,6,7,8,9,10], dice12[1,2,3,4,5,6,7,8,9,10,11,12]dice20[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]]
	let boss = 200;
	for (let i=0; i < boss; i++)
	while(boss = boss - totalDice)
		if()
	return boss;
//
//
//
//
//
//
- dice4 = attack 1-4
- dice6 = attack 1-6
- dice8 = attack 1-8
- dice10 = attack 1-10
- dice12 = attack 1-12
- dice20 = attack 1-20
//
1. Boss is automatically set to value of 100 and player1 is set to value of 200
2. user acts as player1 and rolls 2 random dices from (dice4 through dice20)
3. total of 2 dices will be added up and then subtracted to boss value
then the boss attacks player1 by using just dice20 and then you minus that value to player1 value
4. you repeat it over and over until the boss value equals 0
5. while you're trying to accomplish that.  every 5 turns the boss will regenerate a random number from dice8.
6. also if boss gets player1 down to 0 first before player1 gets boss to 0 then you fail
//
//
//
//
*/
//Do Not Abbreviate method or variable names
function roll(die){
	let dieValue = Math.floor(Math.random() * die)+1;
	return dieValue;
}

function rollDiceAttack(){
	let diceArray = [4,6];
	let rollAttackOne = roll(diceArray[0]);
	let rollAttackTwo = roll(diceArray[1]);
	let attackTotal = rollAttackOne + rollAttackTwo;
		
		return attackTotal;
}

function rollDiceHeavyAttack(){
	let diceArray = [8,10];
	let rollHeavyAttackOne = roll(diceArray[0]);
	let rollHeavyAttackTwo = roll(diceArray[1]);
	let heavyAttackTotal = rollHeavyAttackOne + rollHeavyAttackTwo;
		
		return heavyAttackTotal;
}

function rollDiceSpellAttack(){
	let diceArray = [12,20];
	let rollSpellOne = roll(diceArray[0]);
	let rollSpellTwo = roll(diceArray[1]);
	let spellAttack = rollSpellOne + rollSpellTwo;
	
		return spellAttack;
}

function attack(boss){
	let playerDamage = rollDiceAttack(); //user press button to select
		if(playerDamage < 7){
			boss -= playerDamage - playerDamage*.25
		}
		
		else{
		boss -= (playerDamage);
		}
			return boss;
	}

function heavyAttack(boss){		
		let playerDamage = rollDiceHeavyAttack(); // user press button to select
		if(playerDamage < 11){
			boss -= playerDamage - playerDamage*.375
		}
		
		else{
		boss -= (playerDamage);
		}
			return boss;
	}

function spellAttack(boss){
		let playerDamage = rollDiceSpellAttack(); // user press button to select
		if(playerDamage < 23){
			boss -= playerDamage - playerDamage*.50	
		}

		else{
		boss -= (playerDamage);
		}
			return boss;
	}

//Start of the Game
  function rpgGame() {
 
	let playerOne = 200;
	let count = 1;
	let boss = 200;
	let exitBool = true;


	while(playerOne > 0 && boss > 0 && exitBool) {
		//user selects which attack to use picking from 3 button of Attack,HeavyAttack, or Spell
			let again = true;
		while(again && exitBool){
			let playerOneInput = prompt("PlayerOne choose an attack!! Attack, HeavyAttack,SpellAttack, or Exit to exit game");
			switch(playerOneInput){
				case "Attack": 
			 		boss = (attack(boss));
			 		again = false;
					break;
				case "HeavyAttack": 
					boss = (heavyAttack(boss));
					again = false;
					break;
				case "SpellAttack": 
					boss = (spellAttack(boss));
					again = false;
					break;
				case "Exit":
					exitBool = false;
				default:
					break;				
				}
			}
		// return boss -= Player1Damage 
		if(exitBool === false){
		return ("Exit Game")
	 	}
		// exit game
		if (boss <= 0){
			break;
		}
			// end game
		// boss damage phase
		let bossIndex =  20;
		let bossIndex1 = roll(bossIndex);
		let bossDamage = bossIndex1;
		if(count >= 12){
			playerOne -= (bossDamage * 1.5);
		}
		else{
			playerOne -= (bossDamage);
		}
		// return player1 =- bossDamage
		// boss regenrate health phase
		if(count == 7 || count == 14){
			let bossRegenerate = 10;
			let bossHealth = bossRegenerate;
			boss += bossHealth;
			}
			count++;
	}
	
	if(playerOne>0){
		return ("Winner");
	}
	else{
		return ("Loser");
	}
}

console.log(rpgGame())



