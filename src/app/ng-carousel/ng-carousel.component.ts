import { Component, OnInit, Input } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'ng-carousel',
  templateUrl: 'ng-carousel.component.html',
  styleUrls: ['ng-carousel.component.scss']
})
export class NgCarouselComponent implements OnInit {

  @Input('images') images: string[]=[];
  
  imagesLength:number;
  currentIndex$ = new BehaviorSubject(0);
  changeImage$ = new Subject();
  

  constructor() { }

  ngOnInit(): void {
    this.imagesLength = this.images.length;
    this.changeImageInit(); 
  }

  changeImageInit(){
    this.changeImage$.pipe(
      scan((acc:number, curr:number) => (((acc+curr) % this.imagesLength) + this.imagesLength) % this.imagesLength,0)
    )
    .subscribe((index:number) => {
      this.currentIndex$.next(index);
    });
  }
}
