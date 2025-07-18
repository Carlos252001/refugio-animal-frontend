/*import { Routes } from '@angular/router';

export const routes: Routes = [];
*/

import { Routes } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';
import { Inicio } from './components/inicio/inicio';
import { Peluditos } from './components/peluditos/peluditos';
import {FormularioComponent} from  './components/formulario/formulario.component'
import { AdminApadrinamientoComponent } from './components/admin-apadrinamiento/admin-apadrinamiento';

export const routes: Routes = [
  { path: '', component: Inicio }, // Página pública principal
  { path: 'admin', component: MascotaComponent }, // Vista de administración
  { path: 'peluditos', component: Peluditos},
  { path: 'formularios', component: FormularioComponent },
  { path: 'admin/apadrinamientos', component: AdminApadrinamientoComponent },
  {
  path: 'adoptar/:id',
  loadComponent: () => import('./components/adopcion/adopcion').then(m => m.AdopcionComponent)
 },
 {
  path: 'donar',
  loadComponent: () => import('./components/donacion/donacion').then(m => m.DonacionComponent)
},
{
  path: 'apadrinamiento',
  loadComponent: () => import('./components/apadrinamiento/apadrinamiento').then(m => m.ApadrinamientoComponent)
},
{
  path: 'apadrinar/:id',
  loadComponent: () => import('./components/apadrinar/apadrinar').then(m => m.ApadrinarComponent)
}

];
