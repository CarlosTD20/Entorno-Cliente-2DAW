import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorGuarraComponent } from './error-guarra.component';

describe('ErrorGuarraComponent', () => {
  let component: ErrorGuarraComponent;
  let fixture: ComponentFixture<ErrorGuarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorGuarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorGuarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
