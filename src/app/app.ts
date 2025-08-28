import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Método para saber si estamos en la página de ingreso
  esIngreso(): boolean {
    return this.router.url === '/ingreso';
  }

  // ✅ Abrir ingreso en ventana a pantalla completa
  abrirIngreso(event: Event) {
    event.preventDefault(); // evita que navegue en la misma pestaña

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/ingreso'])
    );

    // Tomar dimensiones de la pantalla disponible
    const width = screen.availWidth;
    const height = screen.availHeight;

    // Abrir en nueva ventana maximizada
    window.open(
      url,
      '_blank',
      `width=${width},height=${height},top=0,left=0,scrollbars=yes,resizable=yes`
    );
  }
}
