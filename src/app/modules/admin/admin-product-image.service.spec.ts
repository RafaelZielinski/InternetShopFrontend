import { TestBed } from '@angular/core/testing';

import { AdminProductImageService } from './admin-product-image.service';

describe('AdminProductImageService', () => {
  let service: AdminProductImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
