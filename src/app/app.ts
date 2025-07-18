import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MascotaComponent, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})  
export class App {
  
}
