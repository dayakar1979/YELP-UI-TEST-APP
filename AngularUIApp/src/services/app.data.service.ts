import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppDataService {
  constructor(private httpClient?: HttpClient) { }
  rootURL = '/api';
  getBusinesses() {
    return this.httpClient.get(this.rootURL + '/getBusinesses');
  }
}