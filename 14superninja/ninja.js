class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log('Name: ', this.name, ' Health: ', this.health, ' Speed: ', this.speed,' Strength: ', this.strength);
    }

    drinkSake() {
        console.log(this.name, " had a refreshing drink!");
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("The first priority of a ninja is to win without fighting.");
    }
}

const sarutobi = new Sensei("Hiruzen Sarutobi");
const kakashi = new Sensei("Kakashi Hatake");

const naruto = new Ninja("Naruto Uzumaki", 125);
const sasuke = new Ninja("Sasuke Uchiha", 150);
const lee = new Ninja("Rock Lee", 115);

sarutobi.showStats();
sarutobi.speakWisdom();
sarutobi.showStats();

naruto.showStats();
naruto.drinkSake();
naruto.showStats();

kakashi.showStats();
sasuke.showStats();
lee.showStats();