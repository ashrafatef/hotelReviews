import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {


  backendUrl = 'http://my-json-server.typicode.com/fly365com/code-challenge'

  constructor(private httpClient : HttpClient) { }

  getAllHotels(){
    return this.httpClient.get(this.backendUrl+'/hotels');
  }

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();


  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
