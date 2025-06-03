import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

import {Swiper} from 'swiper';
import{register} from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-swiper-slide',
  templateUrl: './swiper-slide.page.html',
  styleUrls: ['./swiper-slide.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, CommonModule, FormsModule]
})
export class SwiperSlidePage implements OnInit, AfterViewInit {
  
slides: { img: string, title: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      title: 'Share Photos',
      desc: 'See and share incredible photos from everybody'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      title: 'Play Music',
      desc: 'All your favorite music here'
    },
    {
      img: '/assets/slides/calendar.svg',
      title: 'Never Forget Anything',
      desc: 'The best calendar of the world on your pocket'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      title: 'Your Ubication',
      desc: 'We know were you are, allways!'
    }
  ];

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      // Configuración básica
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      
      // Paginación
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Navegación
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Efectos (opcional)
      effect: 'fade', // 'slide', 'fade', 'cube', 'coverflow', etc.
    });
  }

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateBack('/')
  }

}
