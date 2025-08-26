import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';      // ✔️ Importa AppComponent
import { appConfig } from './app/app.config';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

bootstrapApplication(AppComponent, appConfig); // ✔️ Usa AppComponent
