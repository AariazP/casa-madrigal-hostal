import { Routes } from '@angular/router';
import { PageInitComponent } from './page-init/page-init.component';
import { PageCabaniasComponent } from './page-cabanias/page-cabanias.component';
import { PageHabitacionesComponent } from './page-habitaciones/page-habitaciones.component';

export const routes: Routes = [

    { path: '', 
        component: PageInitComponent
    },{
        path: 'cab',
        component: PageCabaniasComponent
    },{
        path: 'habitaciones',
        component: PageHabitacionesComponent
    },
    {
        path:'**',
        component: PageInitComponent
    }
    
];
