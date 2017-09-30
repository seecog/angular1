export class MobileService{
	
	private mobilelist : any[] = [
	{
		id : 1,
		name : 'Samsung galaxy y',
		cost : 13000,
		brand : 'Sumsung',
		img : 'http://static.compareindia.news18.com/compareindia/gallery/images/2012/jan/gts5360_3_121738573204.jpg'
		
	},
		{
			id : 2,
		name : 'Nokia 1100',
		cost : 1300,
		brand : 'Nokia',
        img : 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/22350/1/1100._nokia-1100-mobile-phone.jpg'		
		},
			{
		id : 3,
		name : 'One Plus 5',
		cost : 36000,
		brand : 'One China',
		img : 'http://cdn04.androidauthority.net/wp-content/uploads/2017/05/OnePlus-5-prototype.jpg'
				
			}
	]
	
	
	getMobiles(){
		
		return this.mobilelist;
		
	}
	
	
	
	
	
}