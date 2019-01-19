import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HotelsListDetailsComponent } from './hotels-list-details/hotels-list-details.component';
import { HotelsListComponent } from './hotels-list-details/hotels-list/hotels-list.component';
import { HotelDetailsComponent } from './hotels-list-details/hotel-details/hotel-details.component';
import { HotelCardComponent } from './hotels-list-details/hotels-list/hotel-card/hotel-card.component';
import { RatingPipe } from './shared/pips/rating.pipe';
import { HotelGalleryComponent } from './hotels-list-details/hotel-details/hotel-gallery/hotel-gallery.component';
import { HotelReviewsComponent } from './hotels-list-details/hotel-details/hotel-reviews/hotel-reviews.component';
import { HotelSingleReviewComponent } from './hotels-list-details/hotel-details/hotel-reviews/hotel-single-review/hotel-single-review.component';
import { HotelsServiceService } from './services/hotels-service/hotels-service.service';
import { DataCommunicationService } from './services/data-communication/data-communication.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      imports : [HttpClientModule],
      providers: [HotelsServiceService , DataCommunicationService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
