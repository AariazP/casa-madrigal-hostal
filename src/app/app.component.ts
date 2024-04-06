import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./head/head.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { InfoComponent } from './info/info.component';
import { InfoHabitacionComponent } from './info-habitacion/info-habitacion.component';
import { DoFilandiaComponent } from './do-filandia/do-filandia.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
      HeadComponent,
      CommonModule,
      NavbarComponent,
      HeadComponent,
      MainSectionComponent,
      InfoComponent,
      InfoHabitacionComponent,
      DoFilandiaComponent,
      ContactenosComponent
    ]
})
export class AppComponent {
  title = 'Casa madrigal';
}
