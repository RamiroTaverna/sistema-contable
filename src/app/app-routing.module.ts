import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component'
import { SupportComponent } from './support/support.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'support', component: SupportComponent }, // Pagina de Soporte
  { path: 'inicio', component: InicioComponent },
  { path: 'Contenido', component: ContenidoComponent }, // Página de Proyecto
  { path: 'about', component: AboutComponent }, // Pagina de acerca de
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
