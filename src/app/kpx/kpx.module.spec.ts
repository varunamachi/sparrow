import { KpxModule } from './kpx.module';

describe('KpxModule', () => {
    let kpxModule: KpxModule;

    beforeEach(() => {
        kpxModule = new KpxModule();
    });

    it('should create an instance', () => {
        expect(kpxModule).toBeTruthy();
    });
});
