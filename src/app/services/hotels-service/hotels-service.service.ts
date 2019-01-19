import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {


  backendUrl = 'http://my-json-server.typicode.com/fly365com/code-challenge'

  constructor(private httpClient : HttpClient) { }

  constructUrl(path : string){
    return this.backendUrl+path;
  }
  url : string ;
  getAllHotels(){
    this.url = this.constructUrl('/hotels');
    return this.httpClient.get(this.url);
    
  }

  getHotelById(id){
    this.url = this.constructUrl(`/hotelDetails/${id}`);
    return this.httpClient.get(this.url);
  }

}
