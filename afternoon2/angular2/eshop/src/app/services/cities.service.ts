export class CityService{
	
	private cities : any[]= [
	{id : 0,name : 'Gwalior',population : 1000,pic : 'http://www.loupiote.com/photos_l/3718531449-interior-gwalior-fort.jpg'},
	{id : 1,name : 'Nagpur',population : 2000,pic : 'http://www.nagpurtoday.in/wp-content/uploads/2015/11/Wuhan-from-Yellow-Crane-Tower-584x400.jpg'},
	{id : 2,name : 'Banagalore',population : 5000,pic : 'https://www.holidify.com/images/compressed/3562.jpg'}
	
	
	]
	
	getCities(){
		
		return this.cities;
	}
	
	getCity(id:Number){
		var i = id.valueOf();//converts wrapper class object into primitive data type
		return this.cities[i];
	}
	
	
	
}