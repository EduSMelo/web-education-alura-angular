angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$http.get("/v1/fotos")
	.success(function(retorno){
		$scope.filtro = '';
		$scope.fotos = retorno;
	}).error(function(e){
		console.log(e);
	});

});
