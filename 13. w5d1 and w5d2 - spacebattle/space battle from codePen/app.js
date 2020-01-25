//Function to show the score
const showScore = () => {
    newDiv(`You have ${myShip.hull} hit points left`);
    newDiv(`Your current enemy is ${randomEnemy.name}.`);
    newDiv(`${randomEnemy.name} has ${randomEnemy.hull} hit points left`)
}
//Function to start the game
const startGame = () => {
    updates();
    showScore();
    newDiv(`What would you like to do? Attack ${randomEnemy.name}, retreat or restart?`);
}
//Function to begin battle
const battle = () => {
    if (myShip.hull <= 0) {
        alert(`Game Over! You Lost.`);
        return;
    } else if (myShip.victories === 6) {
        alert(`You WIN!`);
        return;
    } else {
        $('#game-text').html('')
        //document.getElementById('game-text').innerHTML = '';
        myShip.fight(randomEnemy);
        randomEnemy.fight(myShip);
        newDiv(`Will you attack, or run?`)
    }
    updates();
}
//Function to pick a random enemy from the enemyArray
const randomizer = () => {
    let random = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    randomEnemy = random;
}
//Function to create new DIV in the DOM, did not finish jQuery changeover yet
const newDiv = (input) => {
    let divCreate = document.createElement("DIV");
    let addText = document.createTextNode(input);
    divCreate.appendChild(addText);
    //document.getElementById('game-text').appendChild(divCreate);
    $('#game-text').append(divCreate);
}
//Function to retreat;
const retreat = () => {
    $('#game-text').html('')
    //document.getElementById('game-text').innerHTML = '';
    newDiv(`You retreat like a coward. Game over.`);
    newDiv(`Press restart to try again`);
    updates();
}
//Function to restart the game
const restart = () => {
    $('#game-text').html('');
    //document.getElementById('game-text').innerHTML = '';
    myShip.victories = 0;
    myShip.hull = 20;
    randomizer();
    updates();
    newDiv(`Welcome to SpaceBattle!`);
}
//Function to update score and hitpoints and enemy details
const updates = () => {
    $('#victory-score').html(myShip.victories);
    $('#hitpoints').html(myShip.hull);
    $('#enemy-health').html(randomEnemy.hull);
    $('#enemy-name').html(randomEnemy.name);
}
//Object for the USS Schwarzenegger
const myShip = {
    name: 'USS Schwarzenegger',
    victories: 0,
    hull: 20,
    firepower: 5,
    accuracy: .7,
    fight: (ship) => {
        let myHits = Math.random();
        let hitPower = myShip.firepower;
        if (myHits <= myShip.accuracy) {
            newDiv(`${myShip.name} has hit ${ship.name} for ${hitPower} damage!`);
            ship.hull -= hitPower;
            newDiv(`${ship.name} has ${ship.hull} hit points left!`);
            if (ship.hull <= 0) {
                myShip.victories += 1;
                newDiv(`You have destroyed ${ship.name}! You have ${myShip.victories} victories!`);
            }
        } else {
            newDiv(`${myShip.name} misses ${ship.name}!`);
        }
    }
}
///Class constructor for Alien ships;
class AlienShip {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    fight(ship) {
        let myHits = Math.random();
        let hitPower = this.firepower;
        if (this.hull <= 0) {
            randomizer();
            newDiv(`A new enemy arrives: ${randomEnemy.name}`);
            return;
        } if (myHits <= this.accuracy) {
            newDiv(`${this.name} has hit ${ship.name} for ${hitPower} damage!`);
            ship.hull -= hitPower;
            newDiv(`${ship.name} has ${ship.hull} hit points left!`);
        } else {
            newDiv(`${this.name} misses ${ship.name}!`);
        }
    }
}

/*const motherShip = {
 
}*/
///Created 10 Alien Ships to fight. Need to automate this
const alien1 = new AlienShip('The Death Star');
const alien2 = new AlienShip('FrankenShip')
const alien3 = new AlienShip('Magic School Bus');
const alien4 = new AlienShip('Air Force 1')
const alien5 = new AlienShip('Albatross');
const alien6 = new AlienShip('The Dude');
const alien7 = new AlienShip('Big Boi');
const alien8 = new AlienShip('Titanic');
const alien9 = new AlienShip('Carnival Cruise');
const alien10 = new AlienShip('Chutulu');



let randomEnemy = alien1
const enemyArray = [alien2, alien3, alien4, alien5, alien6, alien7, alien8, alien9, alien10];


////JQuery event listeners
$('#start').click(startGame);
$('#attack').click(battle);
$('#retreat').click(retreat);
$('#restart').click(restart);








