export class picture{

    constructor(public movie_name :string,
 public movie_genre : string,
 public release_date : string, /*date*/
 public actor : string ,
 public actress :string,
 public prod_cost : number,
 public money_earned : number,
 public image : string ){
     }
}

/*class Car {
  constructor(private engine:string, private tires:string, private doors:number){
  }
}
is similar to:

class Car {
  constructor(engine:string, tires:string, doors:number){
    this.engine = engine;
    this.tires = tires;
    this.doors = doors;
  }
}*/