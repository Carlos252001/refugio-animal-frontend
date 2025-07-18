import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota} from '../models/mascotaModel'
@Injectable({
  providedIn: 'root',
})

export class MascotaService {

  URL_API = 'http://localhost:4000/api/mascotas';
  
  selectedMascota: Mascota = {
    nombre: "",
    historia:"",
    tamano: "",
    edad: 0,
    genero: "",
    imagenURL: "",
    estadoAdopcion: "disponible",
    disponibleParaAdopcion: true,
    disponibleParaApadrinar: true,
  } as Mascota;
  mascotas: Mascota[] = [];


  constructor(private http: HttpClient){}


  getMascotas(){
    return this.http.get<Mascota[]>(this.URL_API)
    
  }

  createMascota(mascota: Mascota){
    return this.http.post(this.URL_API, mascota);
  }

  updateMascota(mascota: Mascota){
    return this.http.put(`${this.URL_API}/${mascota._id}`, mascota)
  }

  deleteMascota(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  getMascotaPorId(id: string) {
  return this.http.get<Mascota>(`${this.URL_API}/${id}`);
}


}
