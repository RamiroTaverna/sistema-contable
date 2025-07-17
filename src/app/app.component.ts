import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from '../app/encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component'
import { AboutComponent } from './about/about.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, FooterComponent, ContenidoComponent, InicioComponent, AboutComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  showLogin = false;
  showRegister = false;

  openLogin() {
    this.showLogin = true;
  }

  openRegister() {
    this.showRegister = true;
  }

  closeModals() {
    this.showLogin = false;
    this.showRegister = false;
  }

  
}
