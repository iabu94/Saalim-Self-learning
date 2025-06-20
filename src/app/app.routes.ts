import { Routes } from '@angular/router';
import { PersonFormComponent } from './addperson-form/person-form.component';
import { HomeComponent } from './home/home.component';
import { PersonFormViewComponent } from './view.person-form/person-form-view.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
     { path: 'person-form', component: PersonFormComponent },
     { path: 'person-form-view', component: PersonFormViewComponent },

];

 