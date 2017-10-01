angular.module('myApp').directive('productList',function(){
	return {
		templateUrl : '../views/product_list.html',
		scope : {
			products : '=',
			search : '='
			
		},
		controller : function($scope,$element,$attrs,$http){
			//$http.get('https://ecommerse-cf4aa.firebaseio.com/products.json').then(function(res){
				
				//$scope.products = res.data;
				$scope.products = [
				{
				id : 1,
				name : 'Mango',
				cost : 132,
				img : 'https://www.supplybunny.com/uploads/product/main_image/1585/a117243e-b4a3-444f-b793-aad61fb66b05.jpg'
				},
				{
				id : 2,
				name : 'Litchi',
				cost : 199,
				img : 'http://i.ndtvimg.com/i/2017-02/litchi-620x350_620x350_61486016117.jpg'
				}
				];
				
			/*}).catch(function(err){
				
				
			});*/
			
			
		}
		
	}	
	
});
