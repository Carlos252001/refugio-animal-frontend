import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../services/mascota.service';
import { FormularioAdopcionService } from '../../services/formulario.service';
import { Mascota } from '../../models/mascotaModel';
import { FormularioAdopcion } from '../../models/formularioModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adopcion.html',
  styleUrls: ['./adopcion.css']
})
export class AdopcionComponent implements OnInit {
  mascota: Mascota | null = null;
  paso = 1;

  formulario: FormularioAdopcion = {
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
    estado: 'pendiente'
  };

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private formularioService: FormularioAdopcionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mascotaService.getMascotaPorId(id).subscribe((res) => {
        this.mascota = res;
        this.formulario.idMascota = res._id!;
      });
    }
  }

  siguientePaso() {
    if (this.paso < 3) this.paso++;
  }

  pasoAnterior() {
    if (this.paso > 1) this.paso--;
  }

  enviarFormulario() {
    this.formularioService.crearFormulario(this.formulario).subscribe(() => {
      this.paso = 4; // Formulario enviado
    });
  }

  reiniciar() {
    if (this.mascota?._id) {
      this.formulario = {
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
        idMascota: this.mascota._id,
        estado: 'pendiente'
      };
      this.paso = 1;
    }
  }
}
