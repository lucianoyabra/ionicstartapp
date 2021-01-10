import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild(IonTabs, {static: true}) tabs: IonTabs;
  constructor() { }

  ngOnInit() {
  }

}
