/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BehaviorService } from './behavior.service';

describe('Service: Behavior', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehaviorService]
    });
  });

  it('should ...', inject([BehaviorService], (service: BehaviorService) => {
    expect(service).toBeTruthy();
  }));
});
