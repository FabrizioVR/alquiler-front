import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from '../services/userService/user.service';
import { User } from '../services/userService/user.model';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  nombre: string = '';
  telefono: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  volverInicio() {
    this.router.navigate(['']);
  }

  registrar() {
    if (this.contrasena !== this.confirmarContrasena) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    const newUser: User = {
      name: this.nombre,
      phone: this.telefono,
      password: this.contrasena,
      dni: '',
      lastName: '',
      direction: '',
      rol: 'CLIENTE' // rol por defecto.
    };

    this.userService.save(newUser).subscribe(
      (response) => {
        this.router.navigate(['pagina-main']);
      },
      (error) => {
        this.errorMessage = 'Ocurrió un error durante el registro.';
        console.error(error);
      }
    );
  }
}
