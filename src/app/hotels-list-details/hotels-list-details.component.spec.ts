import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListDetailsComponent } from './hotels-list-details.component';

describe('HotelsListDetailsComponent', () => {
  let component: HotelsListDetailsComponent;
  let fixture: ComponentFixture<HotelsListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
