import { TestBed } from '@angular/core/testing';

import { ResumeCrafterService } from './resume-crafter.service';

describe('ResumeCrafterService', () => {
  let service: ResumeCrafterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeCrafterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
