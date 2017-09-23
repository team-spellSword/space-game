// imports pending

{
    export class Weapon {
        constructor() {
            this.type =  'gun';
            this.damage =  10;
            this.projectileSpeed =  20;
        }

        act(direction, location) {
            new Projectile(this, direction, location);
        }
    }
}
