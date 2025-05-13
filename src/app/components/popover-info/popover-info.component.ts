import { Component } from '@angular/core';
import { IonList, IonItem, IonLabel } from "@ionic/angular/standalone";

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ToastController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class PopoverInfoComponent{
[x: string]: any;

  list: any[] = [
    { position:  1, },
    { position:  2, },
    { position:  3, },
    { position:  4, },
    { position:  5, },
    { position:  6, },
    { position:  7, },
    { position:  8, },
    { position:  9, },
    { position:  10 }
  ]

  constructor( 
    private toastCtrl: ToastController,
    private popoverCtrl: PopoverController          
  ) { }

  async showItemValue(value: number) {
    const toast = await this.toastCtrl.create({
      message: `Item #${value}`,
      duration: 1500,
      position: 'bottom',
      cssClass: 'toast',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            console.log('Confirm clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    await toast.present();

    this.popoverCtrl.dismiss({
      item: value
    })

  }
}
