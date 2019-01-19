import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hotel-reviews',
  templateUrl: './hotel-reviews.component.html',
  styleUrls: ['./hotel-reviews.component.scss']
})
export class HotelReviewsComponent implements OnInit , OnChanges {

  @Input() reviewsList : {}[] ;
  reviewsPagesList : any = [];
  currentReviewsPage :{}[]  = [];
  currentPageIndex = 0 ;
  lastPageIndex = 0 ;



  constructor() { }

  ngOnInit() {
    this.sorting(1);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.currentPageIndex = 0 ;
    this.reviewsList = changes.reviewsList.currentValue;
    this.sorting(1);
    //this._name = name.currentValue.toUpperCase();
  }

  spliteReviewsInPages(){
    let counter = 0 , stopFlag = true ;

    this.reviewsPagesList.length = 0;

    while (stopFlag) {

      if(counter+3 >= this.reviewsList.length){
        stopFlag = false;
      }
      
      this.reviewsPagesList.push(this.reviewsList.slice(counter , counter+3))

      counter+=3;
    }

    this.lastPageIndex = this.reviewsPagesList.length -1 ;

  }

  setCurrentPage(pageIndex : number){

    this.currentPageIndex = pageIndex ;

    this.currentReviewsPage.length = 0;

    this.currentReviewsPage = this.reviewsPagesList[this.currentPageIndex].slice();
    
  }

  getNextPage(){
    this.currentPageIndex ++ ;
    this.setCurrentPage(this.currentPageIndex);
  }
  getPrevPage(){
    this.currentPageIndex -- ;
    this.setCurrentPage(this.currentPageIndex);
  }

  sorting(type : number){
    function compareAS(a,b) {
      if (a.score < b.score)
        return -1;
      if (a.score > b.score)
        return 1;
      return 0;
    }
    function compareDS(a,b) {
      if (a.score > b.score)
        return -1;
      if (a.score < b.score)
        return 1;
      return 0;
    }
    if(type){
      this.reviewsList.sort(compareDS)
    }else{
      this.reviewsList.sort(compareAS);
    }
    this.spliteReviewsInPages()
    this.setCurrentPage(this.currentPageIndex);
  }

}
