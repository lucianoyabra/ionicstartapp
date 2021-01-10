import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;
  usuario = {
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('form submit');
    console.log(this.usuario);
  }

  onClick(){
    this.navCtrl.navigateBack('inicio');
  }

}
