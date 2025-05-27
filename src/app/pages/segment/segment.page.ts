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
  IonIcon, 
  IonAvatar, 
  IonImg, 
  IonItem, 
  IonList, 
  IonSkeletonText 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personOutline, 
  peopleOutline, 
  chatbubblesOutline 
} from 'ionicons/icons';
import { HeaderComponent } from '../../components/header/header.component';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonSkeletonText, 
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
  
  users!: Observable<any>;
  
  constructor(private usersService: UsersService) {
    addIcons({
      personOutline,
      chatbubblesOutline,
      peopleOutline});
  }

  ngOnInit() {
    this.showUsers()
  }

  showUsers(){
    this.users = this.usersService.getUsers()
  }

}
