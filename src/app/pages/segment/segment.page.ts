import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentContent,
  IonSegmentView,
  IonIcon, IonAvatar, IonImg, IonItem, IonTitle, IonToolbar, IonHeader, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, peopleOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem, 
    IonImg, 
    IonAvatar, 
    IonIcon,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonContent,
    IonSegmentContent,
    IonSegmentView,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class SegmentPage implements OnInit {
  
  users: any[] = Array(20);
  
  constructor() {
    addIcons({personOutline,peopleOutline});
  }


  ngOnInit() {}
}
