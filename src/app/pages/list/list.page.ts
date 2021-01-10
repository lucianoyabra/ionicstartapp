import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }
  usuarios: Observable<any>;
  @ViewChild('lista', {static: false}) lista: IonList;

  ngOnInit() {
      this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(item){
    this.presentToast('Añadido a favoritos!');
    this.lista.closeSlidingItems();
  }
  share(item){
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }
  borrar(item){
    this.presentToast('Se ha eliminado!');
    this.lista.closeSlidingItems();
  }

}
