import { Component, Input } from '@angular/core';
import { CuartoDTO } from '../DTO/cuartoDTO';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cuarto',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cuarto.component.html',
  styleUrl: './cuarto.component.css'
})
export class CuartoComponent {

  @Input() cuarto!: CuartoDTO;

  constructor(){
    
  }

}
