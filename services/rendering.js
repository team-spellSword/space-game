gameApp.factory('renderingService', ['tileMap', function(tileMap) {
    return {
        activeSprites: [],
        initialize: function(spriteCanvas, tileCanvas,backgroundCanvas) {
            this.spriteLayer = spriteCanvas;
            this.spriteCtx = spriteCanvas.getContext('2d');

            this.tileLayer = tileCanvas;
            this.tileCtx = tileCanvas.getContext('2d');

            this.backgroundLayer = backgroundCanvas;
            this.backgroundCtx = backgroundCanvas.getContext('2d');
        },
        drawFrame: function() {
            this.clearCanvas();
            for (var i in this.activeSprites) {
                if (!this.activeSprites[i].blinking) { this.drawCircle(this.activeSprites[i], i); }
            }
            this.drawMap(tileMap);
        },
        drawCircle: function(circle) {
            this.spriteCtx.beginPath();
            this.spriteCtx.arc(circle.location.x, circle.location.y, circle.radius, 0, Math.PI*2, false);
            this.spriteCtx.fillStyle = circle.color;
            this.spriteCtx.fill();
        },
        drawFloor: function() {
            this.spriteCtx.beginPath();
            this.spriteCtx.rect(0, this.spriteLayer.height - 10, this.spriteLayer.width, 10);
            this.spriteCtx.fillStyle = 'red';
            this.spriteCtx.fill();
        },
        clearCanvas: function() {
            this.spriteCtx.clearRect(0, 0, this.spriteLayer.width, this.spriteLayer.height);
        },
        drawMap: function(map) {
            var xInterval = this.tileLayer.width / map.cols;
            var yInterval = this.tileLayer.height / map.rows;
            for (var y = 0; y < map.tiles.length; y++) {
                for (var x = 0; x < map.tiles[y].length; x++) {
                    if (map.keys[map.tiles[y][x]]) {
                        this.tileCtx.fillStyle = 'rgba(113, 139, 146, 0.09)';
                        this.tileCtx.fillRect(xInterval * x, yInterval * y, xInterval, yInterval);
                        this.tileCtx.fill();
                    }
                }
            }
        }
    };
}]);
