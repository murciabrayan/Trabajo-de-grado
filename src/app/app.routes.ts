import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(m => m.Contacto)
  },
  {
    path: 'simbolos',
    loadComponent: () =>
      import('./pages/simbolos/simbolos').then(m => m.Simbolos)
  },
  {
    path: 'documentos',
    loadComponent: () =>
      import('./pages/documentos/documentos').then(m => m.Documentos)
  },
  {
    path: 'ingreso',
    loadComponent: () =>
      import('./pages/ingreso/ingreso').then(m => m.Ingreso)
  },
  { path: '**', redirectTo: '' }
];
