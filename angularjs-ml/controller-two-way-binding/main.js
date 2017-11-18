(function main() {

  angular.module("ml-app", [])
    .controller("firstCtrl", ['$scope', function ($scope) {
      $scope.name = "hey!"
    }]);

})();
