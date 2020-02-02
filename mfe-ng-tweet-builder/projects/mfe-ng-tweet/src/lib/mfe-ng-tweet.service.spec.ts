import { TestBed } from '@angular/core/testing';

import { MfeNgTweetService } from './mfe-ng-tweet.service';

describe('MfeNgTweetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MfeNgTweetService = TestBed.get(MfeNgTweetService);
    expect(service).toBeTruthy();
  });
});
