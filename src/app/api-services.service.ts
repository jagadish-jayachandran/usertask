import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  // data: any;

  constructor(
    private httpClient: HttpClient,

  ) {
    
   }
  clearTasks() {

  }
  getItems() {
    // return data;
    // const headers = new HttpHeaders()
// console.log(this.data);

    // return this.httpClient.get<any>('assets/data.json');
  }
}
