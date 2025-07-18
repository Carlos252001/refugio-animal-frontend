import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { CommonModule } from '@angular/common'; 
import { Mascota } from '../../models/mascotaModel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-peluditos',
  imports: [RouterModule, CommonModule],
  templateUrl: './peluditos.html',
  styleUrl: './peluditos.css'
})
export class Peluditos implements OnInit{

   mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}
   ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data.filter(m => m.disponibleParaAdopcion); // solo disponibles
    });
  }
}

