/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TriperiService } from './triperi.service';

describe('TriperiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriperiService]
    });
  });

  it('should ...', inject([TriperiService], (service: TriperiService) => {
    expect(service).toBeTruthy();
  }));
});
