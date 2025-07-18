import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donacion } from './donacion';

describe('Donacion', () => {
  let component: Donacion;
  let fixture: ComponentFixture<Donacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Donacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
