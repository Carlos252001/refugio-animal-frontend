import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormularioAdopcion } from '../models/formularioModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioAdopcionService {

  URL_API = 'http://localhost:4000/api/formularios';

  selectedFormulario: FormularioAdopcion = {
    nombre: '',
    correo: '',
    edad: 0,
    telefono: '',
    motivo: '',
    vivienda: '',
    situacionCambio: '',
    alergias: '',
    zonasAcceso: '',
    preparado: '',
    antecedentesMascota: '',
    vacaciones: '',
    conductaNegativa: '',
    tiempoSolo: '',
    descubrimiento: '',
    distrito: '',
    razonActual: '',
    convivencia: '',
    acuerdo: '',
    idMascota: '',
    estado: 'pendiente',
  };

  formularios: FormularioAdopcion[] = [];

  constructor(private http: HttpClient) {}

  getFormularios(): Observable<FormularioAdopcion[]> {
    return this.http.get<FormularioAdopcion[]>(this.URL_API);
  }

  crearFormulario(formulario: FormularioAdopcion): Observable<FormularioAdopcion> {
    return this.http.post<FormularioAdopcion>(this.URL_API, formulario);
  }

  eliminarFormulario(id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  actualizarEstado(id: string, estado: string): Observable<any> {
    return this.http.put(`${this.URL_API}/${id}`, { estado });
  }

  getFormularioPorId(id: string): Observable<FormularioAdopcion> {
    return this.http.get<FormularioAdopcion>(`${this.URL_API}/${id}`);
  }
}
