import { Component,Input,Output,EventEmitter } from '@angular/core';
import {picture} from 'app/movie/movie.model';
@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

@Input()  id : string;
private pictures : picture[] = [
new picture('Smurfs: the lost village', 'live-action/animated','07/04/2017','smurfs','smurfs',6000000,17100000,'https://upload.wikimedia.org/wikipedia/en/0/07/Smurfs_The_Lost_Village_poster.jpg'),
new picture('Frozen','animated','07/04/2017','frozen','frozen',10624344,7394863,'http://pics.acentertainment.com/shows/695077_tt1.jpg'),
new picture('Tangled','animated','07/04/2017','Tangled','Tangled',10624344,7394863,'https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg'),
new picture('The little Mermaid','animated','07/04/2017','The little Mermaid','The little Mermaid',10624344,7394863,'http://t1.gstatic.com/images?q=tbn:ANd9GcRUmX0QL-sT2V7U21NGM3AhKEiX_b4Qwg4vAsCV2ZacBNU8VcXw'),
new picture('Wall E','animated','07/04/2017','Wall E','Wall E',10624344,7394863,'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-ju7v2w_040d400d.jpeg'),
new picture('Finding memo','animated','07/04/2017','Finding memo','Finding memo',10624344,7394863,'http://cdn.playbuzz.com/cdn/64341e5f-0be6-42bf-8e9e-80af34b3c0b3/3983d9dc-8aec-4f7c-843e-9cd8d468298a.jpg'),
new picture('Up','animated','07/04/2017','up','up',10624344,7394863,'http://www.gstatic.com/tv/thumb/movieposters/190662/p190662_p_v8_aq.jpg'),
new picture('Aladin','animated','07/04/2017','Aladin','Aladin',10624344,7394863,'http://t2.gstatic.com/images?q=tbn:ANd9GcSsSEOwh6rx0SSBgd5IHoAZMaU3jLtyxMfFbtfJFTjc-SYHsFQL'),
new picture('The incredibles','animated','07/04/2017','The incredibles','The incredibles',10624344,7394863,'http://www.gstatic.com/tv/thumb/movieposters/35032/p35032_p_v8_aa.jpg'),
new picture('Beauty and beast','animated','07/04/2017','Beauty and beast','Beauty and beast',10624344,7394863,'http://t0.gstatic.com/images?q=tbn:ANd9GcSGHdQpcMOW6_rrpLdsAGckLsuvWIpta6oehVtnIfzzRI6Lrg2o')
];

@Output() pictureDetail = new EventEmitter<picture>();

showPicture(id){
	  this.pictureDetail.emit(this.pictures[id]);
  }
}
