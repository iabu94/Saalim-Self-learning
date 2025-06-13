import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-form', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
})
export class PersonFormComponent {
  personForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phone_no:['' ,Validators.required]
    });
   
    this.personForm.valueChanges.subscribe(() => {
      if (this.personForm.valid) {
        this.errorMessage = '';
      }
    });
  }

  onSubmit() {
    if (this.personForm.invalid) {
      this.errorMessage = 'Please fill all required fields.';
      this.successMessage = '';
      return;
    }

    const formData = this.personForm.value;

    this.http.post('http://localhost:3000/person', formData).subscribe({
      next: () => {
        this.successMessage = 'Data saved successfully!';
        this.errorMessage = '';
        this.personForm.reset();

        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: () => {
        this.errorMessage = 'Failed to save data. Please try again.';
        this.successMessage = '';
      },
    });
  }
}
