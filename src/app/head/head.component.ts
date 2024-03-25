import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MainSectionComponent } from '../main-section/main-section.component';

@Component({
    selector: 'app-head',
    standalone: true,
    templateUrl: './head.component.html',
    styleUrl: './head.component.css',
    imports: [
        CommonModule,
        NavbarComponent,
        MainSectionComponent
    ]
})
export class HeadComponent {

}
