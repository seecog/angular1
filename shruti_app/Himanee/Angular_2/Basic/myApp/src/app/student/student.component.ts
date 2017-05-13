import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

 private first_name :string= "Himanee";
 private lst_name :string = "Dharwal";
 private age : number =10;
 private class : number = 3;
 private img : string = 'https://s-media-cache-ak0.pinimg.com/564x/57/53/74/575374bf227f9845685a2950dd976f88.jpg';
 private stud_father_name : string = "J S Dharwal";

details(){
alert('Name : ' + this.first_name + ' '+ this.lst_name + ' '+
       'studies in class ' + this.class +' '+ 'and her Father name is '+ this.stud_father_name)
}

}
