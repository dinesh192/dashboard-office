import { TestBed } from '@angular/core/testing';

import { BirthdayAddService } from './birthday.service';

describe('BirthdayAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirthdayAddService = TestBed.get(BirthdayAddService);
    expect(service).toBeTruthy();
  });
});
