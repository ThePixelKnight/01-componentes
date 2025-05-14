import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonProgressBar, IonRange, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {sunnyOutline, moonOutline} from "ionicons/icons";

@Component({
  selector: 'app-progress-range',
  templateUrl: './progress-range.page.html',
  styleUrls: ['./progress-range.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRange, IonProgressBar, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ProgressRangePage implements OnInit {

  progress: number = 0;

  constructor() {
    addIcons({
      sunnyOutline,
      moonOutline
    });
  }

  ngOnInit() {
  }

  rangeChange($event: any) {
    this.progress = $event.detail.value;
  
    const progressBar = document.querySelector('ion-progress-bar') as HTMLIonProgressBarElement;
    if(progressBar){
      progressBar.value = this.progress / 100 
    }
  }

}
