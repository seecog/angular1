angular.module('myApp').directive('seachItem',function(){
	return {
		templateUrl : '../views/search_product.html',
		scope : {
			key : '='			
		}
		
	}	
	
});
