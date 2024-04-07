import { Component } from '@angular/core';
import { HeadComponent } from "../head/head.component";
import { ContactenosComponent } from "../contactenos/contactenos.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabitacionDTO } from '../DTO/habitacionDTO';
import { CuartoComponent } from "../cuarto/cuarto.component";

@Component({
    selector: 'app-page-cabanias',
    standalone: true,
    templateUrl: './page-cabanias.component.html',
    styleUrl: './page-cabanias.component.css',
    imports: [HeadComponent, ContactenosComponent, CuartoComponent]
})
export class PageCabaniasComponent {

  listaCabanias:HabitacionDTO[] = [];

  constructor(private http: HttpClient) {
    this.listaCabanias = [];
  }

  ngOnInit(): void {
    this.cargarHabitaciones().then((data) => {
      //imprimo los datos comoo JSON
      data.forEach(element => {
          element.forEach(habitacion => {
              this.listaCabanias.push(habitacion);
          });
          
      }
      );
      
    });
  }

  async cargarHabitaciones(): Promise<Observable<HabitacionDTO[]>> {
    return await this.http.get<HabitacionDTO[]>('../../assets/cuartos/cabanias.json');
  }
}
