'use strict';

//////////Create Characters and Cache Dom///////////////////////////////
let fightButton = document.getElementById('fightButtonDiv');
let playerSection = document.getElementById("playerDiv")
let player1 = document.createElement('div');
playerSection.appendChild(player1);
let combatSpan = document.getElementById('combatSpan');


function creategoro() {
    let goroDiv = document.createElement('div')
    goroDiv.classList.add("goroStyle")
    playerSection.appendChild(goroDiv);
    return goroDiv
}
creategoro();

///////////Character Class with Constructor Function(Items 1-2)//////////////////
function Character(name, strength, health, chanceForMiss, chanceForCrit) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.chanceForMiss = chanceForMiss;
    this.chanceForCrit = chanceForCrit;

    // this.attack = function (opponent) {

    //     let attackMessage
    //     let player1AttackStrength = Math.round(Math.random() * this.strength)
    //     let opponentDamageTaken = player1AttackStrength;
    //     let opponentAttackStrength = Math.round(Math.random() * opponent.strength)
    //     let player1Damage = opponentAttackStrength;
    //     this.health = this.health - player1Damage;
    //     opponent.health = opponent.health - opponentDamageTaken;

    //     //Player1 Dodges//
    //     if (player1AttackStrength < this.chanceForMiss) {
    //         attackMessage = `${this.name} dodged!`
    //     } else if (opponentAttackStrength < opponent.chanceForMiss) {
    //         attackMessage = `${opponent.name} dodged!`
    //     //Total Knockout//
    //     } else if (player1AttackStrength < this.chanceForCrit) {
    //         attackMessage = `Total knockout! ${this.name} has ruined Goro's Day!`
    //         opponent.health = 0
    //     } else if (opponentAttackStrength < opponent.chanceForCrit) {
    //         attackMessage = `Total knockout! ${opponent.name} has defeated ${this.name}!`
    //         this.health = 0;
    //     //Player1 Hits//
    //     } else if (player1AttackStrength > opponent.strength) {
    //         attackMessage = `POW! ${this.name} attacked ${opponent.name}! Damage:` + " " + opponentDamageTaken + " points. Remaining Health: " + opponent.health + "points.";
    //     //Computer Player Intercepts -- Player1 Takes Damage//
    //     } else if (opponent.strength > player1AttackStrength) {
    //         attackMessage = `${this.name} took a hit! Damage: ` + player1Damage + " points. Remaining Health: " + this.health + "points.";
    //     }
    //     let attackMessageText = document.createTextNode(attackMessage)
    //     combatSpan.appendChild(attackMessageText)
    //     return attackMessage, this.health
    // }

    this.tJbackground = function () {
        player1.classList.remove("bubbleBobbleStyle")
        player1.classList.add("tjNEarlStyle")
        playerSection.classList.remove("bbBackgroundStyle")
        playerSection.classList.add("tjnEarlBackgroundStyle")
    }

    this.bbbackground = function () {
        player1.classList.remove("tJNEarlStyle")
        player1.classList.add("bubbleBobbleStyle")
        playerSection.classList.remove("tjnEarlStyle")
        playerSection.classList.add("bbBackgroundStyle")
    }
}


///////////Select Player1////////////////////////////////
function selection() {

    document.getElementById('selectTjNEarlDiv').addEventListener('click', function () {
        toeJamNEarl.goroWarn()
        toeJamNEarl.tJbackground()
        toeJamNEarl.tJFight()
    });

    document.getElementById('selectBubbleBobbleDiv').addEventListener('click', function () {
        bubbleBobble.goroWarn();
        bubbleBobble.bbbackground();
        bubbleBobble.bbFight()
    });
}
selection()

//////  Four prototype methods (Item 2).  //////////////////////////////////
/////   Attack prototype takes another character as an argument and causes damage (Item 3) ///
Character.prototype.attack = function (opponent) {

    let attackMessage
    let player1AttackStrength = Math.round(Math.random() * this.strength)
    let opponentDamageTaken = player1AttackStrength;
    let opponentAttackStrength = Math.round(Math.random() * opponent.strength)
    let player1Damage = opponentAttackStrength;
    this.health = this.health - player1Damage;
    opponent.health = opponent.health - opponentDamageTaken;

    //Player1 Dodges//
    if (player1AttackStrength < this.chanceForMiss) {
        attackMessage = `${this.name} dodged!`
    } else if (opponentAttackStrength < opponent.chanceForMiss) {
        attackMessage = `${opponent.name} dodged!`
    //Total Knockout//
    } else if (player1AttackStrength < this.chanceForCrit) {
        attackMessage = `Total knockout! ${this.name} has ruined Goro's Day!`
        opponent.health = 0
    } else if (opponentAttackStrength < opponent.chanceForCrit) {
        attackMessage = `Total knockout! ${opponent.name} has defeated ${this.name}!`
        this.health = 0;
    //Player1 Hits//
    } else if (player1AttackStrength > opponent.strength) {
        attackMessage = `POW! ${this.name} attacked ${opponent.name}! Damage:` + " " + opponentDamageTaken + " points. Remaining Health: " + opponent.health + "points.";
    //Computer Player Intercepts -- Player1 Takes Damage//
    } else if (opponent.strength > player1AttackStrength) {
        attackMessage = `${this.name} took a hit! Damage: ` + player1Damage + " points. Remaining Health: " + this.health + "points.";
    }
    let attackMessageText = document.createTextNode(attackMessage)
    combatSpan.appendChild(attackMessageText)
    return attackMessage, this.health
}

Character.prototype.goroWarn = function () {
    confirm(' You think you can defeat me with...' + this.name.toUpperCase() + ' ??!')
}

Character.prototype.tJFight = function() {
    fightButton.style.display = "inline-block";
    fightButton.addEventListener('click', function () {
        toeJamNEarl.attack(goro)
    })
}

Character.prototype.bbFight = function() {
    fightButton.style.display = "inline-block";
    document.getElementById('fightButtonDiv').addEventListener('click', function () {
        bubbleBobble.attack(goro)
    })
}

//////// Character Instances (Item 4) ////////////////////////////
const goro = new Character("Goro", 8, 100, .07, .3);
const toeJamNEarl = new Character("Toe Jam and Earl", 6, 100, .20, .10);
const bubbleBobble = new Character("Bubble Bobble", 7, 100, 0.24, .16);

///// Designed and represented on webpage (Item 5)  ///////////////////)