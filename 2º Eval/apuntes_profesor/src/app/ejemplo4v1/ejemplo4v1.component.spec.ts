import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4v1Component } from './ejemplo4v1.component';

describe('Ejemplo4v1Component', () => {
  let component: Ejemplo4v1Component;
  let fixture: ComponentFixture<Ejemplo4v1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo4v1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4v1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
