gameApp.factory('playerClass', [function() {
    return {
        create: function() {
            return {
                draw: function(canvas) {
                    canvas.beginPath();
                    canvas.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI*2);
                    canvas.fillStyle = '#0095DD';
                    canvas.fill();
                    canvas.closePath();
                }
            };
        }
    };

}]);
