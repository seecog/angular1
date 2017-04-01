angular.module('myApp').directive('productInfo',function(){

return {
restrict : 'A',
scope :{
product : '=',
delDir : '&',
editproduct : '&'
},
controller : function($scope,$element,$attrs){

$scope.show_info = true;
},
templateUrl : 'productinfo1.html'

}

});
