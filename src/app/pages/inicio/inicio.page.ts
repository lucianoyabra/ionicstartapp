import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  textoBuscar = '';
  componentes: Observable<Componente[]>;
  topStories: any;
  slideOpts = {
    initialSlide: 0,
    speed: 1000
  };
  @ViewChild(IonSlides, {static: true}) slider : IonSlides;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.topStories = [
      /* {title: "Exploring San Francisco", author: "Rea Ramsey", body: "", picture: "https://picsum.photos/500/400?image=693"},
      {title: "Coffee the right way", author: "Ellesha Hartley", body: "", picture: "https://picsum.photos/500/400?image=1060"},
      {title: "Best Hiking In Yosemite", author: "Vinnie Alexander", body: "", picture: "https://picsum.photos/500/400?image=1043"},
      {title: "Astro Photography Guide", author: "Greg Rakozy", body: "", picture: "https://picsum.photos/500/400?image=903"} */

      { picture: "/assets/app.png"},
      { picture: "/assets/crossplatform.png"}
    ]
    this.slider.startAutoplay();
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }



}
