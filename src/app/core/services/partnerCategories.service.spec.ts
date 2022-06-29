/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartnerCategoriesService } from './partnerCategories.service';

describe('Service: PartnerCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartnerCategoriesService]
    });
  });

  it('should ...', inject([PartnerCategoriesService], (service: PartnerCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
