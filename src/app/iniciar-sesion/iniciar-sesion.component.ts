import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})

export class IniciarSesionComponent {
  phone: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  registrar() {
    this.router.navigate(['registrar']);
  }

  login() {
    this.userService.login(this.phone, this.password).subscribe(
      (response: boolean) => {
        if (response) {
          this.router.navigate(['pagina-main']);
        } else {
          this.errorMessage = 'Teléfono o contraseña incorrectos.';
        }
      },
      (error) => {
        this.errorMessage = 'Ocurrió un error al intentar iniciar sesión.';
        console.error(error);
      }
    );
  }
}
