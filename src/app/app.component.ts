import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  IonApp,
  IonMenu,
  IonRouterOutlet,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
  IonIcon,
  IonList,
  IonItem, IonSplitPane } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular/standalone';

import { UsersService } from './services/users.service';
import { ComponentsIntf } from './interfaces/Components';
import { Observable } from 'rxjs';

import { addIcons } from 'ionicons';
import { 
    americanFootballOutline,
    alertCircleOutline,
    personCircleOutline,
    radioButtonOffOutline,
    albumsOutline,
    checkmarkCircleOutline,
    calendarOutline,
    balloonOutline,
    gridOutline,
    infiniteOutline,
    documentTextOutline,
    listOutline,
    reorderThreeOutline,
    refreshOutline,
    chatboxOutline,
    caretDownOutline,
    codeWorkingOutline,
    chevronDownCircleOutline,
    searchOutline,
    ellipsisHorizontalCircleOutline,
    imagesOutline
 } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonSplitPane, 
    IonItem,
    IonList,
    IonIcon,
    IonMenuToggle,
    IonToolbar,
    IonMenu,
    IonTitle,
    IonContent,
    IonHeader,
    IonApp,
    IonRouterOutlet,
    CommonModule,
    RouterModule,
  ],
})
export class AppComponent {
  components!: Observable<ComponentsIntf[]>;

  constructor(private usersService: UsersService, private menuCtrl: MenuController) {
    addIcons({
      americanFootballOutline,
      alertCircleOutline,
      personCircleOutline,
      radioButtonOffOutline,
      albumsOutline,
      checkmarkCircleOutline,
      calendarOutline,
      balloonOutline,
      gridOutline,
      infiniteOutline,
      documentTextOutline,
      listOutline,
      reorderThreeOutline,
      refreshOutline,
      chatboxOutline,
      caretDownOutline,
      codeWorkingOutline,
      chevronDownCircleOutline,
      searchOutline,
      ellipsisHorizontalCircleOutline,
      imagesOutline
    });
  }

  ngOnInit() {
    this.components = this.usersService.getMenu();
  }
}
