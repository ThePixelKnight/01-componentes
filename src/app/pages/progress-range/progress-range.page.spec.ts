import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressRangePage } from './progress-range.page';

describe('ProgressRangePage', () => {
  let component: ProgressRangePage;
  let fixture: ComponentFixture<ProgressRangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
