import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  datosRecibidos = [{
    nombre: '',
    pais: ''
  }];
  constructor(private modalCrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    const modal = await this.modalCrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Luciano',
        pais: 'Argentina'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('retorno del modal', data);
    this.datosRecibidos = data;
  }

}
