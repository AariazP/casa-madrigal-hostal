import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-habitacion',
  standalone: true,
  imports: [],
  templateUrl: './info-habitacion.component.html',
  styleUrl: './info-habitacion.component.css'
})
export class InfoHabitacionComponent {

  @Input() title: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Input() ruta:string;

  constructor(private router:Router) { 
    this.title = ' ';
    this.descripcion = ' ';
    this.imagen = ' ';
    this.ruta =' ';
  }

  verOpciones() {
    this.router.navigate([this.ruta]);
  }

}
