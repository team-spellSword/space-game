// Import Statements Pending

{
    export class Mob {
        createRedMob() {
            return new RedMob;
        }

        createBlackMob() {
            return new BlackMob;
        }
    }

    class RedMob {
        constructor() {
            this.location = { x: 200, y: 0 };
            this.direction = 'right';
            this.color = 'red';
            this.radius = 25.0;
            this.maxSpeed = 3.5;
            this.acceleration = 0.25;
            this.horzV = -0.3;
            this.vertV = 0;
            this.hitPoints = [50, 50];
            this.damage = 1;
            this.mob = true;
        }

        resolveGravity() {
            this.vertV += environmentConstants.gravityFactor;
        }

        tileInteract() {
            // Not Implemented
        }

        takeHit(damage, activeSprites) {
            this.hitPoints[0] -= damage;
            if (this.hitPoints[0] < 1) activeSprites.splice(activeSprites.indexOf(this), 1);
        }

        setEdges() {
            this.leftEdge = this.location.x - this.radius;
            this.rightEdge = this.location.x + this.radius;
            this.topEdge = this.location.y - this.radius;
            this.bottomEdge = this.location.y + this.radius;
        }
    }

    class BlackMob {
        constructor() {
            this.location = { x: 600, y: 0 };
            this.direction = 'right';
            this.color = 'black';
            this.radius = 35.0;
            this.maxSpeed = 3.5;
            this.acceleration = 0.25;
            this.horzV = -.3;
            this.vertV = 0;
            this.hitPoints = [50, 50];
            this.damage = 1;
            this.mob = true;
        }

        resolveGravity() {
            this.vertV += environmentConstants.gravityFactor;
        }

        tileInteract() {
            // Not Implemented
        }

        takeHit(damage, activeSprites) {
            this.hitPoints[0] -= damage;
            if (this.hitPoints[0] < 1) activeSprites.splice(activeSprites.indexOf(this), 1);
        }

        setEdges() {
            this.leftEdge = this.location.x - this.radius;
            this.rightEdge = this.location.x + this.radius;
            this.topEdge = this.location.y - this.radius;
            this.bottomEdge = this.location.y + this.radius;
        }
    }
}