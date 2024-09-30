import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'https://gestion-viviendas.onrender.com/gestion-viviendas/api/properties';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}/all`);
  }

  save(property: Property): Observable<Property> {
    return this.http.post<Property>(`${this.apiUrl}/`, property);
  }

  delete(propertyId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${propertyId}`);
  }

  getById(propertyId: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/${propertyId}`);
  }
  
}
