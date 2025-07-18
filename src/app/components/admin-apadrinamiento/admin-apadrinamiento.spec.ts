import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApadrinamientoComponent} from './admin-apadrinamiento';

describe('AdminApadrinamiento', () => {
  let component: AdminApadrinamientoComponent;
  let fixture: ComponentFixture<AdminApadrinamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApadrinamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApadrinamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
