import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./head/head.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
      HeadComponent,
      CommonModule,
      NavbarComponent,
      HeadComponent
    ]
})
export class AppComponent {
  title = 'hostal-casa-madrigal';
}
