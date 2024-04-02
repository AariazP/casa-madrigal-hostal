import { Component } from '@angular/core';
import { ContactenosComponent } from "../contactenos/contactenos.component";
import { DoFilandiaComponent } from "../do-filandia/do-filandia.component";
import { HeadComponent } from "../head/head.component";
import { InfoComponent } from "../info/info.component";

@Component({
    selector: 'app-page-init',
    standalone: true,
    templateUrl: './page-init.component.html',
    styleUrl: './page-init.component.css',
    imports: [ContactenosComponent, DoFilandiaComponent, HeadComponent, InfoComponent]
})
export class PageInitComponent {

}
