app.filter("htmlSafe", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}]);

app.controller("myCtrl",  ['$scope','service','$translate',function($scope,service,$translate) {

  $scope.prix = service[0].prix;
  $scope.pub = service[0].pub;
  $scope.serveur = service[0].serveurs;

  $scope.change = function(){

    $scope.prix = service[$scope.plop].prix;
    $scope.pub = service[$scope.plop].pub;
    $scope.serveur = service[$scope.plop].serveurs;

  }

  $scope.changeLanguage = function (key) {
	  $translate.use(key);
	};
}]);

app.controller("myCtrl", function($scope) {
    $scope.items = ['TEST','PRICE'];
});