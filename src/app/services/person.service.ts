import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private apiUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) { }

   createPerson(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
