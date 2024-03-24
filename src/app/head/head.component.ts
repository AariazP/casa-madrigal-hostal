import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-head',
    standalone: true,
    templateUrl: './head.component.html',
    styleUrl: './head.component.css',
    imports: [
        CommonModule,
        NavbarComponent
    ]
})
export class HeadComponent {

}
