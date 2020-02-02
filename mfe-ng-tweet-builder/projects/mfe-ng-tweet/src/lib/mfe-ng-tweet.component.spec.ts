import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeNgTweetComponent } from './mfe-ng-tweet.component';

describe('MfeNgTweetComponent', () => {
  let component: MfeNgTweetComponent;
  let fixture: ComponentFixture<MfeNgTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfeNgTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeNgTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
