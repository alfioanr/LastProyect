import { TestBed, inject } from '@angular/core/testing';

import { JuniorService } from './junior.service';

describe('JuniorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuniorService]
    });
  });

  it('should be created', inject([JuniorService], (service: JuniorService) => {
    expect(service).toBeTruthy();
  }));
});
