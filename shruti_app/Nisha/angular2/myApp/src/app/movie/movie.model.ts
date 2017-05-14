export class Movie{
	public movie_name : string ;
	public movie_gener : string;
	public movie_releasedate : string;
	public movie_actor : string;
	public movie_actress : string;
	public movie_productioncost : string;
	public movie_money : string;
	public movie_image : string;
constructor(movie_name,movie_gener,movie_releasedate,movie_actor,movie_actress,movie_productioncost,movie_money,movie_image){
	this.movie_name = movie_name;
	this.movie_gener = movie_gener;
	this.movie_releasedate = movie_releasedate;
	this.movie_actor = movie_actor;
	this.movie_actress = movie_actress;
	this.movie_productioncost = movie_productioncost;
	this.movie_money = movie_money;
	this.movie_image = movie_image;
}
	
}