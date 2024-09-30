import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importar Router
import { Property } from '../services/propertyService/property.model';
import { PropertyService } from '../services/propertyService/property.service';

@Component({
  selector: 'app-detalle-vivienda',
  templateUrl: './detalle-vivienda.component.html',
  styleUrls: ['./detalle-vivienda.component.css']
})
export class DetalleViviendaComponent implements OnInit {
  viviendaId!: number;
  vivienda!: Property; // Cambia a tipo Property

  constructor(private route: ActivatedRoute, private router: Router, private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.viviendaId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Obtener los detalles de la vivienda
    this.propertyService.getById(this.viviendaId).subscribe(data => {
      this.vivienda = data;
    }, error => {
      console.error('Error fetching property details:', error);
      this.regresar(); // Redirigir si hay un error
    });
  }

  regresar() {
    this.router.navigate(['/listado-viviendas']);
  }
}