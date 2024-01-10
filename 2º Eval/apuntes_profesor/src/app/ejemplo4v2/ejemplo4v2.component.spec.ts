import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4v2Component } from './ejemplo4v2.component';

describe('Ejemplo4v2Component', () => {
  let component: Ejemplo4v2Component;
  let fixture: ComponentFixture<Ejemplo4v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo4v2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
