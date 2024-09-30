// src/app/listado-viviendas/listado-viviendas.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../services/propertyService/property.service';
import { Property } from '../services/propertyService/property.model';

@Component({
  selector: 'app-listado-viviendas',
  templateUrl: './listado-viviendas.component.html',
  styleUrls: ['./listado-viviendas.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class ListadoViviendasComponent implements OnInit {
  // Lista de propiedades
  propiedades: Property[] = []; // Cambia el nombre a 'propiedades' para mayor claridad

  constructor(private router: Router, private propertyService: PropertyService) {}

  ngOnInit() {
    this.loadPropiedades(); // Cambia el nombre del método para que coincida
  }

  // Método para cargar las propiedades desde el backend
  loadPropiedades() {
    this.propertyService.getAll().subscribe(data => {
      this.propiedades = data;
    }, error => {
      console.error('Error fetching properties:', error);
    });
  }

  // Método para navegar a los detalles de la propiedad seleccionada
  verDetalles(id: number) {
    this.router.navigate(['/detalle', id]);
  }

  // Método para obtener la clase CSS según el estado de la propiedad
  getEstadoClase(estado: string): string {
    switch (estado) {
      case 'Disponible':
        return 'estado-disponible';
      case 'Ocupada':
        return 'estado-ocupada';
      case 'En Mantenimiento':
        return 'estado-mantenimiento';
      default:
        return '';
    }
  }

  regresar_listadoAmain() {
    this.router.navigate(['/pagina-main']); // Cambia esto si tu ruta es diferente
  }
}