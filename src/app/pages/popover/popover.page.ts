import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  PopoverController,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';
import { addIcons } from 'ionicons';
import { archiveOutline } from 'ionicons/icons';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonIcon,
    IonButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class PopoverPage implements OnInit {
  constructor(public popoverCtrl: PopoverController) {
    addIcons({ archiveOutline });
  }

  ngOnInit() {}

  async openPopover($event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: $event,
      translucent: true,
      cssClass: 'popover',
      backdropDismiss: false,
      animated: true,
    });
    await popover.present();

    const { role } = await popover.onWillDismiss();
    console.log('onWillDismiss', role);
  }
}
