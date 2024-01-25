import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloFiltradoComponent } from './articulo-filtrado.component';

describe('ArticuloFiltradoComponent', () => {
  let component: ArticuloFiltradoComponent;
  let fixture: ComponentFixture<ArticuloFiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloFiltradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
