import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAdopcionService } from '../../services/formulario.service';
import { FormularioAdopcion } from '../../models/formularioModel';
import { MascotaService } from '../../services/mascota.service'; 

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class FormularioComponent implements OnInit {

  formularios: any[] = [];
  formularioSeleccionado: FormularioAdopcion | null = null;

  constructor(private formularioService: FormularioAdopcionService, private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.obtenerFormularios();
  }

    obtenerFormularios() {
    this.formularioService.getFormularios().subscribe(
      (res) => {
        this.formularios = res;
        // 3. buscar nombre de mascota para cada formulario
        this.formularios.forEach((f) => {
          this.mascotaService.getMascotaPorId(f.idMascota).subscribe(
            (mascota) => f.nombreMascota = mascota.nombre,
            (err) => f.nombreMascota = 'Mascota no encontrada'
          );
        });
      },
      (err) => console.error(err)
    );
  }


  verDetalle(formulario: FormularioAdopcion) {
    this.formularioSeleccionado = formulario;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('detalleFormularioModal'));
    modal.show();
  }

  eliminarFormulario(id: string) {
    if (confirm('¿Estás seguro de querer eliminar este formulario?')) {
      this.formularioService.eliminarFormulario(id).subscribe(() => {
        this.obtenerFormularios();
      });
    }
  }
 
  actualizarEstado(id: string, estado: string) {
  this.formularioService.actualizarEstado(id, estado).subscribe(() => {
    this.obtenerFormularios();
  });
}

}
