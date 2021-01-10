import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentImput(){
    const prompt = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese el Titulo',
      inputs:[
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'Alert',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });
    await prompt.present();
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'Alert',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'Aceptar',
            cssClass: 'secondary',
            handler: (data) => {
              console.log('Confirm Cancel: blah' + data);
            }
          }
        ]
    });

    await alert.present();

  }

}
