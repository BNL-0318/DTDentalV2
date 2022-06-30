/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardTypesService } from './cardTypes.service';

describe('Service: CardTypes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardTypesService]
    });
  });

  it('should ...', inject([CardTypesService], (service: CardTypesService) => {
    expect(service).toBeTruthy();
  }));
});
