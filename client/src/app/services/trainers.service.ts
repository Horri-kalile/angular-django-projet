import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {

  private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.apiUrl}/trainers/`);
  }
}
