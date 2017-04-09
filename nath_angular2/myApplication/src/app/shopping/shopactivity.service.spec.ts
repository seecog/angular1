/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopactivityService } from './shopactivity.service';

describe('ShopactivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopactivityService]
    });
  });

  it('should ...', inject([ShopactivityService], (service: ShopactivityService) => {
    expect(service).toBeTruthy();
  }));
});
