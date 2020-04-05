import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCarouselComponent } from './ng-carousel.component';

describe('NgCarouselComponent', () => {
  let component: NgCarouselComponent;
  let fixture: ComponentFixture<NgCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCarouselComponent);
    component = fixture.componentInstance;
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('passing input images', async(() => {
    component.images= [
      'https://via.placeholder.com/1920x1080/69B7BF/FFFFFF?text=1',
      'https://via.placeholder.com/1920x1080/F0F2F0/000000?text=2',
      'https://via.placeholder.com/1920x1080/BF8360/000000?text=3',
      'https://via.placeholder.com/1920x1080/8C4C35/FFFFFF?text=4',
      'https://via.placeholder.com/1920x1080/D93030/FFFFFF?text=5'

    ];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
