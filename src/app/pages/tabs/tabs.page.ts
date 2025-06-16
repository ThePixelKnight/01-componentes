import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTab 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { 
  compassOutline, 
  homeOutline, 
  sendOutline 
} from 'ionicons/icons';

import { InicioPage } from "../inicio/inicio.page";
import { SearchbarPage } from "../searchbar/searchbar.page";
import { ListPage } from "../list/list.page";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTab,
    IonLabel,
    IonIcon,
    IonTabButton,
    IonTabs,
    IonTabBar,
    CommonModule,
    FormsModule, 
    InicioPage, 
    SearchbarPage, 
    ListPage
  ],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({ homeOutline, compassOutline, sendOutline });
  }

  ngOnInit() {}
}
