import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArticuloComponent } from './delete-articulo.component';

describe('DeleteArticuloComponent', () => {
  let component: DeleteArticuloComponent;
  let fixture: ComponentFixture<DeleteArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
