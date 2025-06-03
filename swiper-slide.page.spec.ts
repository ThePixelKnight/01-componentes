import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperSlidePage } from './swiper-slide.page';

describe('SwiperSlidePage', () => {
  let component: SwiperSlidePage;
  let fixture: ComponentFixture<SwiperSlidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
