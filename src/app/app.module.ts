import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Components
import { AppComponent } from './app.component';
import { HotelsListDetailsComponent } from './hotels-list-details/hotels-list-details.component';
import { HotelsListComponent } from './hotels-list-details/hotels-list/hotels-list.component';
import { HotelDetailsComponent } from './hotels-list-details/hotel-details/hotel-details.component';
import { HotelCardComponent } from './hotels-list-details/hotels-list/hotel-card/hotel-card.component';

// Services 
import { HotelsServiceService } from './services/hotels-service/hotels-service.service';
import { RatingPipe } from './shared/pips/rating.pipe';
import { DataCommunicationService } from './services/data-communication/data-communication.service';
import { HotelGalleryComponent } from './hotels-list-details/hotel-details/hotel-gallery/hotel-gallery.component';
import { HotelReviewsComponent } from './hotels-list-details/hotel-details/hotel-reviews/hotel-reviews.component';
import { HotelSingleReviewComponent } from './hotels-list-details/hotel-details/hotel-reviews/hotel-single-review/hotel-single-review.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsListDetailsComponent,
    HotelsListComponent,
    HotelDetailsComponent,
    HotelCardComponent,
    RatingPipe,
    HotelGalleryComponent,
    HotelReviewsComponent,
    HotelSingleReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [HotelsServiceService , DataCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
