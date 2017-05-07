angular.module('myApp').controller('StudentinfoController',function($http,$scope,$routeParams){
	
var id = $routeParams.id;	
$scope.getStudentInfo = function(){
	
$http.get('https://school-48cb3.firebaseio.com/students/'+id+'.json').then(function(res){

$scope.student = res.data;
}).catch(function(err){
console.log(err)
});
	
}

$scope.update = function(){
	
	$http({
      method: "PUT",
        url: 'https://school-48cb3.firebaseio.com/students/'+id+'.json',
        data: $scope.student
   }).then(function(res){
console.log(res)
}).catch(function(err){
console.log(err)
});




}
});