import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isactiveGuard } from './isactive.guard';

describe('isactiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
