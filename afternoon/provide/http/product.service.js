angular.module('myapp').service('ProductService',function($http,$q,Firebase){

this.addProduct = function(product){
var obj = $q.defer();
$http.post(Firebase.url+'products.json',product).then(function(res){
obj.resolve(res)
}).catch(function(error){
obj.reject();
console.log(error)
});
return obj.promise;
}

this.getProducts = function(){
var obj = $q.defer();
$http.get(Firebase.url+'products.json').then(function(res){
obj.resolve(res.data);
}).catch(function(error){
obj.reject();
console.log(error)
});
return obj.promise;
}

});