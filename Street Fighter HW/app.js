let randomLevel = function (a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };
  
  let randomGen = function (val) {
    return Math.floor(Math.random() * val);
  };
  

class Fighter {
    constructor (name, health, defense){
        this.name = name
        this.health = 10;
        this.defense = randomLevel(5, 10); 
        this.moves = [
            {name : 'Punch' , strength: randomLevel(5, 10)},
            {name : 'Kick' , strength: randomLevel(5, 10)},
            {name : 'Hadouken', strength: randomLevel(7, 10)}

        ];
    }
    attack(player) {
        const move = randomGen (this.moves.length);
        const damage = randomGen(this.moves[move].strength);
        player.health -= damage;
        console.log(
            '${this.name} did a level ${damage} damage to ${player.name} who is left with a health level of ${player.health}'
        );
    }
}    

const ken = new Fighter("Ken");
const blanka = new Fighter("Blanka");

let gameOver = true;
let blankaKen = true;

while (gameOver) {
    if (blankaKen) {
        blanka.attack(ken);    
    } else {
        ken.attack(blanka);
    }
    blankaKen = !blankaKen;

    if (blanka.health <= 0) {
        console.log("Blanka is dead, Ken Wins");
        gameOver = false;
    }

    if (ken.health <= 0) {
        console.log("Ken is dead, Blanka Wins");
        gameOver = false;
    }
}

