import { TestBed } from '@angular/core/testing';

import { UtilsExternalServicesService } from './utils-external-services.service';

describe('UtilsExternalServicesService', () => {
  let service: UtilsExternalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsExternalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
