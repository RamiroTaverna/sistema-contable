import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro'; // sin .component.ts

export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: 'registro', pathMatch: 'full' }
];
