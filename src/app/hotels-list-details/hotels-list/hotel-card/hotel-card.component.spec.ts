import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardComponent } from './hotel-card.component';
import { RatingPipe } from 'src/app/shared/pips/rating.pipe';

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCardComponent  , RatingPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have hotel name as title', () => {
    
      component.hotelDetails = {
        id: 37681,
        name: "Hilton Sharm",
        totalReviews: 1678,
        totalScore: 8.5,
        pricePerNight: 180,
        photo: "http://picsum.photos/100/100/?image=109"
      };
      
      const compile = fixture.debugElement.nativeElement;
      const h1tag = compile.querySelector('h4');
      fixture.detectChanges();
      expect(h1tag.textContent).toBe('Hilton Sharm')
    });
});
