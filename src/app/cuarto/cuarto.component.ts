import { Component, Input } from '@angular/core';
import { CuartoDTO } from '../DTO/cuartoDTO';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

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

  verOpciones() {
    window.open("https://wa.link/jtln9x", '_blank');
  }

}
