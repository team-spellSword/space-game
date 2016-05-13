gameApp.factory('collisionService', [function() {
    return {
        collideFloor: function(canvas, object) {
            if (object.location.y + object.radius >= canvas.height - 10) {
                object.location.y = canvas.height - 10 - object.radius;
                object.vertV = 0;
                return true;
            } else {
                return false;
            }
        }
    };
}]);
