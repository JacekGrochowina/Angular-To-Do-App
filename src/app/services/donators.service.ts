import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonatorsService {
  private url: string = 'https://randomuser.me/api/';
  private numberResult: number = 15;

  constructor(private http: HttpClient) { }

  getDonators() {
    return this.http.get(`${this.url}/?results=${this.numberResult}`);
  }
}
