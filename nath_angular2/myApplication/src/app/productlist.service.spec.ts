/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductlistService } from './productlist.service';

describe('ProductlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductlistService]
    });
  });

  it('should ...', inject([ProductlistService], (service: ProductlistService) => {
    expect(service).toBeTruthy();
  }));
});
