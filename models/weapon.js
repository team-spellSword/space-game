// imports pending


class Weapon {
    constructor() {
        this.type               = 'gun';
        this.damage             = 10;
        this.projectileSpeed    = 20;
    }

    act(direction, location) {
        // Needs update: push to active sprites should
        // happen in this function
        new Projectile(this, direction, location);
    }
}
