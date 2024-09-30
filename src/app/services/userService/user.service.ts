import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl =
    'https://gestion-viviendas.onrender.com/gestion-viviendas/api/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }

  login(phone: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.apiUrl}/login?telefono=${phone}&contrasena=${password}`
    );
  }

  getById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/`, user);
  }

  update(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${userId}`, user);
  }

  delete(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${userId}`);
  }
}