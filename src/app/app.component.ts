import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { PersonFormComponent } from './addperson-form/person-form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './footer/footer.component';
@Component({
    selector: 'app-root',
    imports: [  RouterModule,HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-form-fe';
}
