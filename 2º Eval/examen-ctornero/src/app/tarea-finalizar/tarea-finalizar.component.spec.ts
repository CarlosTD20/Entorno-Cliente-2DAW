import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaFinalizarComponent } from './tarea-finalizar.component';

describe('TareaFinalizarComponent', () => {
  let component: TareaFinalizarComponent;
  let fixture: ComponentFixture<TareaFinalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaFinalizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
