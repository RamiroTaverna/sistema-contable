import { Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component'
import { SupportComponent } from './support/support.component'
import { AboutComponent } from './about/about.component'
import { ProgramaComponent } from './programa/programa.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { InformacionComponent } from './informacion/informacion.component'
import { BetaComponent } from './beta/beta.component'

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contenido', component: ContenidoComponent }, // Ruta para la página de proyecto
  { path: 'support', component: SupportComponent }, // Ruta para la página de soporte
  { path: 'about', component: AboutComponent }, // Ruta para la página de Acerca de
  { path: 'programa', component: ProgramaComponent }, // Ruta para la pagina de Dante
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'beta', component: BetaComponent },
  
];


