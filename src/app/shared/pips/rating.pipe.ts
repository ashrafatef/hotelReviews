import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(score: number, args?: any): any {

    if(score >= 9){
      return score + ' Excellent';
    }else if(score > 7){
      return score + ' Very Good';
    }else if(score >= 5){
      return score + ' Good';
    }else{
      return score + ' Bad';
    }
    
  }

}
