import { NgModule, Injector } from '@angular/core';
import { MfeNgTweetComponent } from './mfe-ng-tweet.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { createCustomElement } from '@angular/elements';
import { NgxElementUtilModule, NgxElement } from '@salilvnair/ngx-element-util';

@NgModule({
  declarations: [MfeNgTweetComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgxElementUtilModule
  ],
  providers: [NgxElement],
  entryComponents: [MfeNgTweetComponent]
})
export class MfeNgTweetModule {
  constructor(private injector: Injector ){
    const mfeTweetComp = createCustomElement(MfeNgTweetComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('mfe-ng-tweet', mfeTweetComp);

  
  }
 }
