import { TestBed, inject } from '@angular/core/testing';

import { LinkserviceService } from './linkservice.service';

describe('LinkserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkserviceService]
    });
  });

  it('should be created', inject([LinkserviceService], (service: LinkserviceService) => {
    expect(service).toBeTruthy();
  }));
});
