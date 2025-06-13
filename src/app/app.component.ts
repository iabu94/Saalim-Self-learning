import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonFormComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-form-fe';
}
