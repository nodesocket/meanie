app.controller('featuresController', ['$scope', '$resource', function($scope, $resource) {
    var Feature = $resource('/api/features');

    Feature.query(function(result) {
        $scope.features = result;
    });

    $scope.createFeature = function() {
        var feature = new Feature();

        feature.title = $scope.title;
        feature.body = $scope.body;
        feature.icon = $scope.icon;

        feature.$save(function(result) {
            $scope.features.push(result);
            $scope.title = '';
            $scope.body = '';
            $scope.icon = '';
        });
    };
}]);