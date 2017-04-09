angular.module('myApp').controller('Registercontroller',function($scope,$rootScope,$firebaseAuth){
	var ref = firebase.database().ref();
    var auth = $firebaseAuth();
    $scope.loadStt = false;
	$scope.registerUser = function(){
		$scope.loadStt = true;
		auth.$createUserWithEmailAndPassword($scope.email,$scope.password).then(function(res){
			ref.child('users').child(res.uid).set({
				email : $scope.email,
				first_name : $scope.first_name,
				last_name : $scope.last_name,
				date : new Date(),
				userRef : res.uid
				
			});
			$scope.first_name = '';
			$scope.last_name = '';
			$scope.email = '';
			$scope.password = '';
			$rootScope.msg = "You are succussfully registered !";
			$scope.loadStt = false;
			
		}).catch(function(err){
			
			$rootScope.err = err.msg;
		});
	}
});