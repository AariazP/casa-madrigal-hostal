import { Component } from '@angular/core';
import { HeadComponent } from "../head/head.component";
import { InfoComponent } from "../info/info.component";
import { InfoHabitacionesComponent } from "../info-habitaciones/info-habitaciones.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuartoComponent } from "../cuarto/cuarto.component";
import { HabitacionDTO } from '../DTO/habitacionDTO';

@Component({
    selector: 'app-page-habitaciones',
    standalone: true,
    templateUrl: './page-habitaciones.component.html',
    styleUrl: './page-habitaciones.component.css',
    imports: [HeadComponent, InfoComponent, InfoHabitacionesComponent, CuartoComponent]
})
export class PageHabitacionesComponent {


    listaHabitaciones: HabitacionDTO[];

    constructor(private http: HttpClient) {
        this.listaHabitaciones = [];
     }
  
    ngOnInit(): void {
      this.cargarHabitaciones().then((data) => {
        //imprimo los datos comoo JSON
        data.forEach(element => {
            element.forEach(habitacion => {
                this.listaHabitaciones.push(habitacion);
            });
            
        }
        );
        
      });
    }
  
    async cargarHabitaciones(): Promise<Observable<HabitacionDTO[]>> {
      return await this.http.get<HabitacionDTO[]>('../../assets/cuartos/habitaciones.json');
    }

}
