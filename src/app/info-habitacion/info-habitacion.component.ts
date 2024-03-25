import { Component, Input } from '@angular/core';

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

  constructor() { 
    this.title = ' ';
    this.descripcion = ' ';
    this.imagen = ' ';
  }
}
