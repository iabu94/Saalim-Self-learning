import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';


export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    
  ]
};
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
