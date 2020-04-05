import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCarouselComponent } from './ng-carousel/ng-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
