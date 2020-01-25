console.log("It is working?")

//Create the USS Scwartz


let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
}
console.log(playerShip);

//Add methods for battle
attack: enemyShip => {
    console.log("attacking");

    //check for hit ... accuracy

    if (matchMedia.random() < playerShip.accuracy) {
        enemyShip.hull -= playerShip.firepower;
    } else {
        console.log("Attack missed!!!");
    }

    console.log(enemyShip);

    //calculate chance attack will damage other sjip using Math.random

};

console.log(playerShip);

// Define an AlineShip class

class AlienShip {
    constructor() {
        this.hull = 3
        this.firepower = 2
        this.accuracy = .6
    }

    attack() {
        console.log("Alien Ship attacking")
        //check for hit or miss
        if (Math.random() < this.accuracy) {
            console.log("Alien ship hit player");
        }
        playerShip.hull -= this.firepower;
    }
}
//AlienShip

//Create a game object

// Start the game
console.log("Generating enemy ships");
enemy = new AlienShip();
console.log(enemy);

//Turn by turn logic
//player ship attacks
playerShip.attack(enemy);


//check if enemy ship destroyed
if (enemy.hull <= 0) {
    console.log("Enemy ship distroyed");
    let response = prompt("Ship destroyed, attack or retreat?");
    if (response === "retreat") {
        alert("you retreated, game over");
    } else if (response === "attack") {
        console.log("continuing gameplay");
    }
} else {
    enemy.attack();
}


// Battle

//Retreat option



// End game logic