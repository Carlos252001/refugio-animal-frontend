export interface Apadrinamiento {
  nombreDonante: string;
  correoDonante: string;
  telefono: string;
  monto: number;
  mensaje?: string;
  idMascota: string; // importante que sea solo string
  estado?: 'pendiente' | 'confirmado' | 'rechazado';
  creadoEn?: string;
  actualizadoEn?: string;
  _id?: string;
}