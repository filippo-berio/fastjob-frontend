import { TestBed } from '@angular/core/testing';

import { ProfileGuard } from './profile.guard';

describe('AccessTokenGuardGuard', () => {
    let guard: ProfileGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(ProfileGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
