import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'en-carousel-project';
  
  public images:string[];

  constructor(){
    this.images = [
      'https://via.placeholder.com/1920x1080/69B7BF/FFFFFF?text=1',
      'https://via.placeholder.com/1920x1080/F0F2F0/000000?text=2',
      'https://via.placeholder.com/1920x1080/BF8360/000000?text=3',
      'https://via.placeholder.com/1920x1080/8C4C35/FFFFFF?text=4',
      'https://via.placeholder.com/1920x1080/D93030/FFFFFF?text=5'

    ]
  }
}
