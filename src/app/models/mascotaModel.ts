export interface Mascota {
  imagenURL: string,
  nombre: string,
  edad: number,
  genero: string,
  tamano: string,
  historia: string,
  estadoAdopcion: string,
  disponibleParaAdopcion: boolean,
  disponibleParaApadrinar: boolean,
  createdAt?: string,
  updatedAt?: string,
  _id?: string
}