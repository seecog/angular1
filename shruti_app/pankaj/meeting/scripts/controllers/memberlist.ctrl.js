angular.module('myApp').controller('Memberlistcontroller',function($scope,$routeParams,Authentication,$firebaseAuth,$firebaseArray){
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	var uid = $routeParams.uid;
	var mid = $routeParams.mid;
	
	auth.$onAuthStateChanged(function(user){
		console.log(user)
		var memberRef = ref.child('users').child(uid).child('meetings').child(mid).child('members');
		var memberInfo = $firebaseArray(memberRef);
	    $scope.members = memberInfo;
			
		
		
		});
		
	
	
	
	$scope.logOut = function(){
		Authentication.logout();
	}
});