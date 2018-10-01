import { TestBed } from '@angular/core/testing';

import { KpxService } from './kpx.service';

describe('KpxService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: KpxService = TestBed.get(KpxService);
        expect(service).toBeTruthy();
    });
});
