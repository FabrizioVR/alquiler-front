// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ListadoViviendasComponent } from './listado-viviendas/listado-viviendas.component';
import { DetalleViviendaComponent } from './detalle-vivienda/detalle-vivienda.component';
import { PaginaMainComponent } from './pagina-main/pagina-main.component';
import { PublicarPropiedadComponent } from './publicar-propiedad/publicar-propiedad.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';

export const routes: Routes = [
  {path: '', component: IniciarSesionComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'pagina-main', component: PaginaMainComponent},
  { path: 'listado-viviendas', component: ListadoViviendasComponent },
  { path: 'publicar', component: PublicarPropiedadComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'detalle/:id', component: DetalleViviendaComponent }
];