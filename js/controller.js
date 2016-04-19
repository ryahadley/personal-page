angular.module('app').controller('appCtrl', function($scope, appService) {

    $scope.comments = appService.showComments();

    $scope.footTag = '2016 Ryan Hadley';

    $scope.adding = function(text) {
      appService.addText(text);
      $scope.message = "";
      $('#comments').find('input').val('');
    }

    $scope.showAdd = false;

    $scope.typewriter = function() {
      appService.typeout();
    }

});
