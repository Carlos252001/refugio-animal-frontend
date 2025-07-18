import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apadrinamiento } from '../models/apadrinamientoModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApadrinamientoService {

  URL_API = 'http://localhost:4000/api/apadrinamientos';

  selectedApadrinamiento: Apadrinamiento = {
    nombreDonante: '',
    correoDonante: '',
    telefono: '',
    monto: 0,
    mensaje: '',
    idMascota: ''
  };

  apadrinamientos: Apadrinamiento[] = [];

  constructor(private http: HttpClient) {}

  getApadrinamientos(): Observable<Apadrinamiento[]> {
    return this.http.get<Apadrinamiento[]>(this.URL_API);
  }

  crearApadrinamiento(apadrinamiento: Apadrinamiento): Observable<Apadrinamiento> {
    return this.http.post<Apadrinamiento>(this.URL_API, apadrinamiento);
  }

  eliminarApadrinamiento(id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  getApadrinamientoPorId(id: string): Observable<Apadrinamiento> {
    return this.http.get<Apadrinamiento>(`${this.URL_API}/${id}`);
  }
}
