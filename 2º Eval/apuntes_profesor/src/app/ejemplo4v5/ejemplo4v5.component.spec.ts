import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4v5Component } from './ejemplo4v5.component';

describe('Ejemplo4v5Component', () => {
  let component: Ejemplo4v5Component;
  let fixture: ComponentFixture<Ejemplo4v5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo4v5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4v5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
