import { TestBed, inject } from '@angular/core/testing';

import { ReturnValueService } from './return-value.service';

describe('ReturnValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnValueService]
    });
  });

  it('should be created', inject([ReturnValueService], (service: ReturnValueService) => {
    expect(service).toBeTruthy();
  }));
});
