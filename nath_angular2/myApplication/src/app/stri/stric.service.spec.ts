/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StricService } from './stric.service';

describe('StricService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StricService]
    });
  });

  it('should ...', inject([StricService], (service: StricService) => {
    expect(service).toBeTruthy();
  }));
});
