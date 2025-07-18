import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apadrinar } from './apadrinar';

describe('Apadrinar', () => {
  let component: Apadrinar;
  let fixture: ComponentFixture<Apadrinar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apadrinar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apadrinar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
