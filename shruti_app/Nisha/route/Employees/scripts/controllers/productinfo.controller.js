angular.module('myApp').controller('ProductinfoController',function($scope,$routeParams,$rootScope){
	var id = $routeParams.id;
	console.log($rootScope.products.length)
	//return false;
	for(i=0;i<$rootScope.products.length;i++)
	{
		if($rootScope.products[i].id == id)
		{
			$scope.product=$rootScope.products[i];
			
		}
		
	}
	
	
	console.log('I am in contact controller')
	
});