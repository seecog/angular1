angular.module('myApp').controller('HomeController',function($scope,$http){
	
	$scope.getRecord = function(){
$http.get('https://school-48cb3.firebaseio.com/students.json').then(function(res){
$scope.students = res.data;
}).catch(function(err){
console.log(err)
});
}
});
