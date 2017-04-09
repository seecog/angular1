/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TricalService } from './trical.service';

describe('TricalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TricalService]
    });
  });

  it('should ...', inject([TricalService], (service: TricalService) => {
    expect(service).toBeTruthy();
  }));
});
