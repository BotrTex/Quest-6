class Human {
    constructor(name, health = 100, weapon = 'Fists', armor = 'None') {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.armor = armor;
    }

    // Getter and setter methods for health
    getHealth() {
        return this.health;
    }

    setHealth(newHealth) {
        this.health = newHealth;
    }

    // Getter and setter methods for weapon
    getWeapon() {
        return this.weapon;
    }

    setWeapon(newWeapon) {
        this.weapon = newWeapon;
    }

    // Getter and setter methods for armor
    getArmor() {
        return this.armor;
    }

    setArmor(newArmor) {
        this.armor = newArmor;
    }

    // Getter method for name
    getName() {
        return this.name;
    }

    // Method to display player information
    displayInfo() {
        console.log(`Player: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Weapon: ${this.weapon}`);
        console.log(`Armor: ${this.armor}`);
        console.log('--------------------------');
    }
}

// Example usage:
const Link = new Player('Link', 100, 'Sword', 'Steel Armor');
Link.displayInfo();

// Update player information
Link.setHealth(80);
Link.setWeapon('Axe');
Link.displayInfo();
