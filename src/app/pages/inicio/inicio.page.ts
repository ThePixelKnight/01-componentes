import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  MenuController,
} from '@ionic/angular/standalone';

import { UsersService } from '../../services/users.service';
import { ComponentsIntf } from '../../interfaces/Components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class InicioPage implements OnInit {
  components!: Observable<ComponentsIntf[]>;

  constructor(
    private menuCtrl: MenuController,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.components = this.usersService.getMenu();
  }

  openMenu() {
    this.menuCtrl.open('main-menu');
  }
}
