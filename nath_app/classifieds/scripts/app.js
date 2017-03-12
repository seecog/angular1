var app = angular.module('ngClassifieds',['ngMaterial']);
app.config(function($mdThemingProvider){
	$mdThemingProvider.theme('default')
	.primaryPalette('teal');
});