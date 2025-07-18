import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Mascota } from '../../models/mascotaModel';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mascota.html',
  styleUrls: ['./mascota.css']
})
export class MascotaComponent implements OnInit {

  constructor(public mascotaService: MascotaService){}
  ngOnInit(): void { 
    this.getMascotas();
  }

  resetForm(form: NgForm){
    form.reset();
    this.getMascotas();
  }

  getMascotas(){
    this.mascotaService.getMascotas().subscribe(
      res => {
        this.mascotaService.mascotas = res;
      },
      err => console.error(err)
    )
  }

  addMascota(form: NgForm){
    if(form.value._id){
      this.mascotaService.updateMascota(form.value).subscribe(
       res => {
        this.getMascotas();
        form.reset();
      },
      err => console.error(err)
      )
    }else{
      this.mascotaService.createMascota(form.value).subscribe(
      res => {
        this.getMascotas();
        form.reset();
      },
      err => console.error(err)
    )
    }
  }

  deleteMascota(id: string){
    if( confirm('¿Estás seguro de querer eliminaarlo?')){
      this.mascotaService.deleteMascota(id).subscribe(
        (res) =>{
          this.getMascotas();
        },
        (err)=> console.error(err)
      );
    }
    
  }

  editMascota(mascota: Mascota){
    this.mascotaService.selectedMascota = mascota;
  }

  mascotaSeleccionada: Mascota | null = null;

verHistoria(mascota: Mascota) {
  this.mascotaSeleccionada = mascota;
  const modal = new (window as any).bootstrap.Modal(document.getElementById('historiaModal'));
  modal.show();
}

  
}
