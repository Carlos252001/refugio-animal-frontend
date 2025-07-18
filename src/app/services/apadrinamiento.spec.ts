import { TestBed } from '@angular/core/testing';

import { Apadrinamiento } from './apadrinamiento';

describe('Apadrinamiento', () => {
  let service: Apadrinamiento;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apadrinamiento);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
