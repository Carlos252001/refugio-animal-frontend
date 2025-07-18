import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApadrinamientoService } from '../../services/apadrinamiento';
import { Apadrinamiento } from '../../models/apadrinamientoModel';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-admin-apadrinamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-apadrinamiento.html',
  styleUrls: ['./admin-apadrinamiento.css']
})
export class AdminApadrinamientoComponent implements OnInit {

  apadrinamientos: any[] = [];
  apadrinamientoSeleccionado: Apadrinamiento | null = null;

  constructor(
    private apadrinamientoService: ApadrinamientoService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.obtenerApadrinamientos();
  }

  obtenerApadrinamientos() {
    this.apadrinamientoService.getApadrinamientos().subscribe(
      (res) => {
        this.apadrinamientos = res;
        this.apadrinamientos.forEach((a) => {
          this.mascotaService.getMascotaPorId(a.idMascota).subscribe(
            (mascota) => a.nombreMascota = mascota.nombre,
            (err) => a.nombreMascota = 'Mascota no encontrada'
          );
        });
      },
      (err) => console.error(err)
    );
  }

  verDetalle(apadrinamiento: Apadrinamiento) {
    this.apadrinamientoSeleccionado = apadrinamiento;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('detalleApadrinamientoModal'));
    modal.show();
  }

  eliminarApadrinamiento(id: string) {
    if (confirm('¿Estás seguro de querer eliminar este apadrinamiento?')) {
      this.apadrinamientoService.eliminarApadrinamiento(id).subscribe(() => {
        this.obtenerApadrinamientos();
      });
    }
  }
}
