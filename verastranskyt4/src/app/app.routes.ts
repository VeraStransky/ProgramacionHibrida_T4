import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista-de-publicaciones',
    loadComponent: () => import('./lista-de-avisos/lista-de-publicaciones.page').then( m => m.ListaDePublicacionesPage)
  },
  {
    path: 'formulario-de-aviso',
    loadComponent: () => import('./formulario-de-aviso/formulario-de-aviso.page').then( m => m.FormularioDeAvisoPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./paginas/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
];
