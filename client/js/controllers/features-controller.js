app.controller('featuresController', ['$scope', '$resource', function($scope, $resource) {
    var Feature = $resource('/api/features');

    Feature.query(function(result) {
        $scope.features = result;
    });

    $scope.createFeature = function(title, body, icon) {
        var feature = new Feature();

        feature.title = title;
        feature.body = body;
        feature.icon = icon;

        feature.$save(function(result) {
            $scope.features.push(result);
            $scope.title = '';
            $scope.body = '';
            $scope.icon = '';
        });
    };
}]);