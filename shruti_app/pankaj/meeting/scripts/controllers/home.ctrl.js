angular.module('myApp').controller('Homecontroller',function($scope,Authentication,$firebaseAuth,$firebaseArray,$firebaseObject){
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	$scope.loadStt = false;
	auth.$onAuthStateChanged(function(user){
		console.log(user)
		var meetingRef = ref.child('users').child(user.uid).child('meetings');
		var meetingInfo = $firebaseArray(meetingRef);
		
		meetingInfo.$loaded().then(function(data){
		$scope.meetings = meetingInfo;
		$scope.loadStt = true;	
		$scope.meetingCount = meetingInfo.length;
		});
		
		meetingInfo.$watch(function(data){			
		console.log('the length is '+meetingInfo.length)
		$scope.meetingCount = meetingInfo.length;
		});
		
		$scope.addMeeting = function(){			
	meetingInfo.$add({name : $scope.meeting_name}).then(function(data){
		$scope.meeting_name = '';
				console.log('Meeting Added')
			}).catch(function(err){
				console.log('error is');
				console.log(err);
			});
		}
		
		$scope.deleteMeeting = function(id){
		var meetingDelRef = ref.child('users').child(user.uid).child('meetings').child(id);
		if(confirm('Do you want to delete this meeting'))
		{
		var record = $firebaseObject(meetingDelRef);
		record.$remove(id);
		}
	}
		
	});
	
	
	
	$scope.logOut = function(){
		Authentication.logout();
	}
});