import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HotelsListDetailsComponent } from './hotels-list-details/hotels-list-details.component';
import { HotelsListComponent } from './hotels-list-details/hotels-list/hotels-list.component';
import { HotelDetailsComponent } from './hotels-list-details/hotel-details/hotel-details.component';
import { HotelCardComponent } from './hotels-list-details/hotels-list/hotel-card/hotel-card.component';

// Services 
import { HotelsServiceService } from './services/hotels-service/hotels-service.service';
import { RatingPipe } from './shared/pips/rating.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HotelsListDetailsComponent,
    HotelsListComponent,
    HotelDetailsComponent,
    HotelCardComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HotelsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
