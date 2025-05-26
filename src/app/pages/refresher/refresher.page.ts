import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRefresher, IonRefresherContent, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonRefresherContent, IonRefresher, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class RefresherPage implements OnInit {
  items: any[] = []


  constructor() { }

  ngOnInit() {
  }
  
  handleRefresh($event: any) {
    setTimeout(()=>{
      this.items = Array(20);
      $event.target.complete();
    }, 1500)
  }

}
