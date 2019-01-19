import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListDetailsComponent } from './hotels-list-details.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsServiceService } from '../services/hotels-service/hotels-service.service';
import { DataCommunicationService } from '../services/data-communication/data-communication.service';
import { HotelCardComponent } from './hotels-list/hotel-card/hotel-card.component';
import { RatingPipe } from '../shared/pips/rating.pipe';
import { HotelGalleryComponent } from './hotel-details/hotel-gallery/hotel-gallery.component';
import { HotelReviewsComponent } from './hotel-details/hotel-reviews/hotel-reviews.component';
import { HotelSingleReviewComponent } from './hotel-details/hotel-reviews/hotel-single-review/hotel-single-review.component';

describe('HotelsListDetailsComponent', () => {
  let component: HotelsListDetailsComponent;
  let fixture: ComponentFixture<HotelsListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
  });

  it('should create', () => {
    fixture = TestBed.createComponent(HotelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('hotel details created' , ()=>{
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('hotel details created' , ()=>{
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
