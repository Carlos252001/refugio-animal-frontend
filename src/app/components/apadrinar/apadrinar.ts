import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../services/mascota.service';
import { ApadrinamientoService } from '../../services/apadrinamiento';
import { Mascota } from '../../models/mascotaModel';
import { Apadrinamiento } from '../../models/apadrinamientoModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apadrinar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apadrinar.html',
  styleUrls: ['./apadrinar.css']
})
export class ApadrinarComponent implements OnInit {
  mascota: Mascota | null = null;
  apadrinamiento: Apadrinamiento = {
    nombreDonante: '',
    correoDonante: '',
    telefono: '',
    monto: 0,
    mensaje: '',
    idMascota: '',
    estado: 'pendiente'
  };

  enviado = false;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private apadrinamientoService: ApadrinamientoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mascotaService.getMascotaPorId(id).subscribe((res) => {
        this.mascota = res;
        this.apadrinamiento.idMascota = res._id!;
      });
    }
  }

  finalizarApadrinamiento() {
    this.apadrinamientoService.crearApadrinamiento(this.apadrinamiento).subscribe(() => {
      this.enviado = true;
    }, err => {
      console.error('Error al enviar apadrinamiento:', err);
    });
  }

  reiniciar() {
    if (this.mascota?._id) {
      this.apadrinamiento = {
        nombreDonante: '',
        correoDonante: '',
        telefono: '',
        monto: 0,
        mensaje: '',
        idMascota: this.mascota._id,
        estado: 'pendiente'
      };
      this.enviado = false;
    }
  }
}
