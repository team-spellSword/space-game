// imports pending

class Player {
    constructor() {
        this.location       = { x: 100, y: 0 };
        this.direction      = 'right';
        this.color          = 'blue';
        this.radius         = 20;
        this.maxSpeed       = 4.5;
        this.acceleration   = 0.25;
        this.horzV          = 0; // positive is right
        this.vertV          = 0; // positive is down
        this.weapon         = new Weapon();
        this.acted          = false;
        this.hitPoints      = [50, 50];
        this.player         = true;
        this.blinking       = false;
    }

    setEdges() {
        this.leftEdge   = this.location.x - this.radius;
        this.rightEdge  = this.location.x + this.radius;
        this.topEdge    = this.location.y - this.radius;
        this.bottomEdge = this.location.y + this.radius;
    }

    act() {
        if (!this.acted) this.weapon.act(this.direction, this.location);
        this.acted = true;
    }

    moveLeft() {
        this.direction = 'left';
        if (this.horzV > -this.maxSpeed) {
            this.horzV -= this.acceleration;
        }
    }

    moveRight() {
        this.direction = 'right';
        if (this.horzV < this.maxSpeed) this.horzV += this.acceleration;
    }

    slow() {
        if (this.horzV > 0) this.horzV -= this.acceleration;
        else if (this.horzV < 0) this.horzV += this.acceleration;
    }

    jump() {
        if (this.grounded) this.vertV -= 12.5;

        this.grounded = false;
    }

    tileInteract(tile, y, x) {
        // Not implemented
    }

    collideWith(mob) {
        if (
            this.rightEdge >= mob.leftEdge && 
            this.topEdge <= mob.bottomEdge && 
            this.topEdge >= mob.topEdge && 
            this.leftEdge <= mob.rightEdge
        ) return true;
    }

    takeHit(damage, activeSprites) {
        this.hitPoints[0] -= damage;
        if (this.hitPoints[0] < 1) {
            this.blinking = true;
            if (this.hitPoints[0] < 1) activeSprites.splice(activeSprites.indexOf(this), 1);
        }
    }
}
