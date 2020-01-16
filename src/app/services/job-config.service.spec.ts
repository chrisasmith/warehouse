import { TestBed,async,inject } from '@angular/core/testing';
import { JobConfigService } from './job-config.service';

describe('JobConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [JobConfigService]
  }));

  it('should be created', inject ([JobConfigService], (service: JobConfigService) => {
    expect(service).toBeTruthy();
  });
});