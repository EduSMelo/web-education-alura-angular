angular.module('minhasDiretivas', [])
	.directive('meuPainel', function(){
		var ddo = {};
		ddo.restrict = "AE";
		ddo.scope = {
			titulo = '@'
		};
		return ddo;
	});
