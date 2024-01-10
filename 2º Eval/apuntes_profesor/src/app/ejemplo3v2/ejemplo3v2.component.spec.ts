import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo3v2Component } from './ejemplo3v2.component';

describe('Ejemplo3v2Component', () => {
  let component: Ejemplo3v2Component;
  let fixture: ComponentFixture<Ejemplo3v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo3v2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo3v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
