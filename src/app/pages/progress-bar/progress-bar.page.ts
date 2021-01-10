import { Component, OnInit } from '@angular/core';
import { DateTimePage } from '../date-time/date-time.page';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentaje = 0.0;
  constructor() { }

  ngOnInit() {
   /*  setTimeout(() => {
      this.porcentaje = 1;
    }, 2500); */
  }
  cambioRango(event){
    this.porcentaje = event.detail.value / 100;
    console.log(event);
  }

}
