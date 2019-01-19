import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hotel-gallery',
  templateUrl: './hotel-gallery.component.html',
  styleUrls: ['./hotel-gallery.component.scss']
})
export class HotelGalleryComponent implements OnInit , OnChanges {

  @Input() images;
  currentImage : any ;

  constructor() { }

  ngOnInit() {
    //console.log(this.images);
    // if(this.images){
    //   this.currentImage = this.images[0].photo;
    //   console.log("this is "+this.images[0].photo);
    // }
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.images = changes.images.currentValue;
    this.currentImage = this.images[0].photo;
    //this._name = name.currentValue.toUpperCase();
  }
  changeSelectedImage(imageSrc : string){
    this.currentImage = imageSrc;
  }

}
