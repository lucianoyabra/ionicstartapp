import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes = ['Han Solo', 'Darth Vader', 'Qui-Gon', 'Obi-Wan Kenobi', 'Luke Skywalker', 'Chewbacca', 'Princes Leia'];
  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    //FUNCION MOVER IONIC 4 ahora IONIC lo hace automatico
    //const itemMover = this.personajes.splice(event.detail.from,1)[0];
    //this.personajes.splice(event.detail.to,0,itemMover);
    //event.detail.complete();
    this.personajes = event.detail.complete(this.personajes);
  }
  onClick(){
    console.log(this.personajes);
  }

}
