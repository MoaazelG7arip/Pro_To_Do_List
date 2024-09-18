import { TestBed } from '@angular/core/testing';

import { SpecialTaskService } from './special-task.service';

describe('SpecialTaskService', () => {
  let service: SpecialTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
