import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo3v1Component } from './ejemplo3v1.component';

describe('Ejemplo3v1Component', () => {
  let component: Ejemplo3v1Component;
  let fixture: ComponentFixture<Ejemplo3v1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo3v1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo3v1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
