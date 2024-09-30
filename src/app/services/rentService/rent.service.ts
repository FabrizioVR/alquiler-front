import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rent } from './rent.model';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  private apiUrl = 'https://gestion-viviendas.onrender.com/gestion-viviendas/api/rents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Rent[]> {
    return this.http.get<Rent[]>(`${this.apiUrl}/all`);
  }

  save(rent: Rent): Observable<Rent> {
    return this.http.post<Rent>(`${this.apiUrl}/`, rent);
  }

  delete(rentId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${rentId}`);
  }
}
