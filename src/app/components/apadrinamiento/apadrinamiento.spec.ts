import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apadrinamiento } from './apadrinamiento';

describe('Apadrinamiento', () => {
  let component: Apadrinamiento;
  let fixture: ComponentFixture<Apadrinamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apadrinamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apadrinamiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
