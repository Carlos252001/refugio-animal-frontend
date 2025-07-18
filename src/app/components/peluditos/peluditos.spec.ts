import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peluditos } from './peluditos';

describe('Peluditos', () => {
  let component: Peluditos;
  let fixture: ComponentFixture<Peluditos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peluditos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peluditos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
