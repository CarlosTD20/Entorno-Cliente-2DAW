import { TestBed } from '@angular/core/testing';

import { GuardPasswordGuard } from './guard-password.guard';

describe('GuardPasswordGuard', () => {
  let guard: GuardPasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardPasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
