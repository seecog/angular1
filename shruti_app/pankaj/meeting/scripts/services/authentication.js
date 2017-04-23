angular.module('myApp').service('Authentication',function($rootScope,$firebaseAuth,$location,$firebaseObject){
	
	var ref = firebase.database().ref();
    var auth = $firebaseAuth();
	$rootScope.loginstt = true;
	this.login = function(email,password){
		auth.$signInWithEmailAndPassword(email,password).then(function(userRef){
			console.log('The user is ')
			console.log(userRef)
			$rootScope.loginstt = false;
			$location.path('/home')
		}).catch(function(err){
			console.log('Error is ')
			console.log(err)
			$rootScope.err = err.message;
			
		});
	}
	
	this.signInRequire = function(){
		return auth.$requireSignIn();
	}
	
	this.logout = function(){
		return auth.$signOut();		
	}
	
	auth.$onAuthStateChanged(function(authUser){
		 if(authUser)
		 {
		 var userRef = ref.child('users').child(authUser.uid);
		 var userObj = $firebaseObject(userRef);
		 $rootScope.currentUser = userObj;
		 }
		 else
		 {
		 $rootScope.currentUser = '';
		 }
		 });

	
	this.register = function(user){
		auth.$createUserWithEmailAndPassword(user.email,user.password).then(function(res){
			ref.child('users').child(res.uid).set({
				email : user.email,
				first_name : user.first_name,
				last_name : user.last_name,
				img : user.img,
				date : new Date(),
				userRef : res.uid
				
			});
			$rootScope.msg = 'You are registered successfully!';
			}).catch(function(err){
				console.log('The error is ')
				console.log(err)
				$rootScope.err = err.message;
			});
		//start
	}
	
	
});