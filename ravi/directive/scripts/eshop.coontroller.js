
angular.module('eshop').controller('eshopController',function($scope){
$scope.emps = [{
pic : 'http://www.lakshmansruthi.com/cineprofiles/images/mohan.jpg',
name : {
first_name : 'Mohan',
last_name : 'kumar',
family_name : 'agarwal'
},
contact : {
mobile : '8888888877786767',
email : 'mohan@gmail.com',
landline : '8732678374'

},
age : 21
},
{
pic : 'http://global.luskin.ucla.edu/wp-content/uploads/2015/07/MOhan-1004x1500.jpg',
name : {
first_name : 'Sohan',
last_name : 'kumar',
family_name : 'gupta'
},
contact : {
mobile : '88888887878786767',
email : 'sohan@gmail.com',
landline : '87988678374'

},
age : 22

}


]





});