import { Component, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userService/user.service'; // Asegúrate de que la ruta es correcta
import { User } from '../services/userService/user.model'; // Asegúrate de que esta ruta es correcta

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [NgIf, CommonModule, FormsModule],
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  usuario: User = {
    name: '',
    lastName: '',
    dni: '',
    phone: '',
    direction: '',
    password: '',
    rol: 'CLIENTE',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    console.log(usuario);
    const userId = 1; // No es el ID que se debería poner
    this.userService.getById(userId).subscribe((user) => {
      this.usuario = user;
    });
  }

  volver() {
    this.router.navigate(['/pagina-main']);
  }

  guardarCambios() {
    const userId = 1; //no debería ser este ID
    this.userService.update(userId, this.usuario).subscribe({
      next: (updatedUser) => {
        alert('Perfil actualizado exitosamente');
        this.router.navigate(['/pagina-main']);
      },
      error: (err) => {
        console.error('Error al actualizar el perfil:', err);
        alert('Error al actualizar el perfil, por favor intenta nuevamente');
      },
    });
  }
}