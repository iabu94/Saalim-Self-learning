import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormViewComponent } from './person-form-view.component';

describe('PersonFormViewComponent', () => {
  let component: PersonFormViewComponent;
  let fixture: ComponentFixture<PersonFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonFormViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
