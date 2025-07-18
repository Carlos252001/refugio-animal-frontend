import { Mascota } from './mascotaModel';
export interface FormularioAdopcion {
  nombre: string;
  correo: string;
  edad: number;
  telefono: string;
  motivo: string;
  vivienda: string;
  situacionCambio: string;
  alergias: string;
  zonasAcceso: string;
  preparado: string;
  antecedentesMascota: string;
  vacaciones: string;
  conductaNegativa: string;
  tiempoSolo: string;
  descubrimiento: string;
  distrito: string;
  razonActual: string;
  convivencia: string;
  acuerdo: string;
  idMascota: Mascota | string;
  estado?: 'pendiente' | 'aprobado' | 'rechazado';
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}
