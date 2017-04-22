angular.module('myApp').controller('Homecontroller',function($scope,Authentication,$firebaseAuth,$firebaseArray){
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	
	auth.$onAuthStateChanged(function(user){
		console.log(user)
		var meetingRef = ref.child('users').child(user.uid).child('meetings');
		var meetingInfo = $firebaseArray(meetingRef);
		
		$scope.addMeeting = function(){
	meetingInfo.$add({name : $scope.meeting_name}).then(function(data){
				console.log('Meeting Added')
			}).catch(function(err){
				console.log('error is');
				console.log(err);
			});
		}
	});
	
	
	$scope.logOut = function(){
		Authentication.logout();
	}
});