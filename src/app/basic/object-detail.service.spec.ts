import { TestBed, inject } from '@angular/core/testing';

import { ObjectDetailService } from './object-detail.service';

describe('ObjectDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectDetailService]
    });
  });

  it('should be created', inject([ObjectDetailService], (service: ObjectDetailService) => {
    expect(service).toBeTruthy();
  }));
});
