import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4v4Component } from './ejemplo4v4.component';

describe('Ejemplo4v4Component', () => {
  let component: Ejemplo4v4Component;
  let fixture: ComponentFixture<Ejemplo4v4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo4v4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4v4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
