import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDoctor } from '../interfaces/iDoctor';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getDoctores() {
    //return this.httpClient.get('url del endpoint');
    return "get";
  }

  public saveDoctor(data: IDoctor) {
    //return this.httpClient.post('url del endpoint', data, {observe:'response'}).pipe();
    return "save";
  }

}
