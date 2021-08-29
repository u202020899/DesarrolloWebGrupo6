import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDetalleHabitacionComponent } from './registro-detalle-habitacion.component';

describe('RegistroDetalleHabitacionComponent', () => {
  let component: RegistroDetalleHabitacionComponent;
  let fixture: ComponentFixture<RegistroDetalleHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDetalleHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDetalleHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
