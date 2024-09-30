import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './pagina-main.component.html',
  styleUrl: './pagina-main.component.css'
})
export class PaginaMainComponent {
  constructor(private router: Router) {}

  // Método para navegar a la lista de viviendas
  alquilar() {
    this.router.navigate(['/listado-viviendas']);
  }

  editarPerfil() {
    this.router.navigate(['/editar-perfil']);
  }

  publicar() {
    this.router.navigate(['/publicar']);
  }
  
}