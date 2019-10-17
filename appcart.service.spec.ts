import { TestBed } from '@angular/core/testing';

import { AppcartService } from './appcart.service';

describe('AppcartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppcartService = TestBed.get(AppcartService);
    expect(service).toBeTruthy();
  });
});
