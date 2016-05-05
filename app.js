(function() {
    angular.module('app', [])
    .controller('main', ['$scope', function($scope) {
        $scope.setup = function() {
            var canvas = document.findElementById('canvas');
            var ctx = canvas.getContext('2d');
        };

        $scope = window.$scope;
    }]);
})();
