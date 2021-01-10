import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, Platform } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';
  constructor(private dataService: DataService, private socialSharing: SocialSharing
    , private platform: Platform) { }

  ngOnInit() {
    this.segment.value = 'Todos';
    this.superHeroes = this.dataService.getSuperheroes();
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;
    if (valorSegmento === 'Todos'){
      this.publisher = '';
      return;
    }
    this.publisher = event.detail.value;
  }

  share(heroe){
    if (this.platform.is('cordova')){
      this.socialSharing.share('Mirá esto!', 'Nuevo desde la App de Lucho', '',
    'https://lyrs.es');
    }else{
      if (navigator['share']) {
        navigator['share']({
          title: 'Mirá esto!',
          text: 'Nuevo desde la App de Lucho',
          url: 'https://lyrs.es',
        }).then(() => console.log('succesful share'))
        .catch((error) => console.log('error sharing', error));
      }else{
        console.log('no se pudo compartir');
      }

    }
  }
}
