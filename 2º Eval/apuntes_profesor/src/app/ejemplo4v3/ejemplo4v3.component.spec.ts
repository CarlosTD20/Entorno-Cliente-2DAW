import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4v3Component } from './ejemplo4v3.component';

describe('Ejemplo4v3Component', () => {
  let component: Ejemplo4v3Component;
  let fixture: ComponentFixture<Ejemplo4v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo4v3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
