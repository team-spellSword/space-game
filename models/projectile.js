// imports pending

class Projectile {
    constructor(weapon, direction, location) {
        const dir = {'right': weapon.projectileSpeed, 'left': -weapon.projectileSpeed};
        const bullet = {
            location: Object.create(location),
            projectile: true,
            color: 'black',
            radius: 4,
            horzV: dir[direction],
            vertV: 0,
            damage: weapon.damage,
            resolveGravity: function() {
                this.vertV += 0.01 * environmentConstants.gravityFactor;
            },
            collideWith: (object) => {
                if (
                        (
                            this.location.x >= object.leftEdge && 
                            this.location.x <= object.rightEdge
                        ) && // Collide x
                        (
                            this.location.y <= object.bottomEdge && 
                            this.location.y >= object.topEdge
                        ) // Collide y
                    ) return true;
            }
        };
        renderingService.activeSprites.push(bullet);
    }
}
