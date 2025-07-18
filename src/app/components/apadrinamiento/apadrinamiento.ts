import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { CommonModule } from '@angular/common';
import { Mascota } from '../../models/mascotaModel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apadrinamiento',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './apadrinamiento.html',
  styleUrl: './apadrinamiento.css'
})
export class ApadrinamientoComponent implements OnInit {

  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data.filter(m => m.disponibleParaApadrinar); // solo los apadrinables
    });
  }
}
