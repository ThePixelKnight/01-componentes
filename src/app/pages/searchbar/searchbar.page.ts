// Ionic modules
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic Components
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonButtons,
  IonSearchbar,
  IonList,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';

// Services & Pipes
import { UsersService } from 'src/app/services/users.service';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonLabel,
    IonList,
    IonSearchbar,
    IonButtons,
    IonTitle,
    IonBackButton,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    SearchFilterPipe,
  ],
})
export class SearchbarPage implements OnInit {
  albums: any[] = [];
  searchText: string = ''

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.showAlbums();
  }

  onSearchChange($event: any) {
    this.searchText = $event.detail.value
  }

  showAlbums() {
    this.usersService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
