import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../addperson-form/person-form.component';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private apiUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) { }

   createPerson(data: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, data);
  }
}

