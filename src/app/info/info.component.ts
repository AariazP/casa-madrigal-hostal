import { Component } from '@angular/core';
import { InfoHabitacionComponent } from "../info-habitacion/info-habitacion.component";

@Component({
    selector: 'app-info',
    standalone: true,
    templateUrl: './info.component.html',
    styleUrl: './info.component.css',
    imports: [InfoHabitacionComponent]
})
export class InfoComponent {

  

}
