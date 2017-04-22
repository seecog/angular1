angular.module('myApp').controller('Addmembercontroller',function($scope,$location,$routeParams,Authentication,$firebaseAuth,$firebaseArray){
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	var uid = $routeParams.uid;
	var mid = $routeParams.mid;
	
	auth.$onAuthStateChanged(function(user){
		console.log(user)
		var memberRef = ref.child('users').child(uid).child('meetings').child(mid).child('members');
		var memberInfo = $firebaseArray(memberRef);
	
		$scope.addMember = function(){
			
			memberInfo.$add({first_name : $scope.first_name,last_name : $scope.last_name,
			email : $scope.email , pic : $scope.pic}).then(function(data){
				$location.path('/memberlist/'+uid+'/'+mid);
			}).catch(function(err){
				console.log('Error is ')
				console.log(err)
			});
			
			
			
			}
		});
		
	
	
	
	$scope.logOut = function(){
		Authentication.logout();
	}
});