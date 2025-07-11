import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    correo: '',
    contrasena: '',
    rol: 0,
    empresa: ''
  };

  constructor(private http: HttpClient) {}

  registrar(form: NgForm) {
    this.http.post('http://localhost:5000/api/registrar', this.usuario)
      .subscribe({
        next: () => {
          alert('Usuario registrado ✅');
          this.usuario = { nombre: '', correo: '', contrasena: '', rol: 0, empresa: '' };
          form.resetForm();
        },
        error: err => {
          if (err.status === 409) {
            alert('❗ Ese correo ya está registrado');
          } else {
            alert('Error al registrar ❌');
          }
          console.error(err);
        }
      });
  }


}
