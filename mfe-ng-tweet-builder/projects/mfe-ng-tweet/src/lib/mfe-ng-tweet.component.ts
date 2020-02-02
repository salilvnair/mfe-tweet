import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NgxElement } from '@salilvnair/ngx-element-util';


@Component({
  selector: 'lib-mfe-ng-tweet',
  templateUrl: './mfe-ng-tweet.component.html',
  styleUrls: ['./mfe-ng-tweet.component.css']
})
export class MfeNgTweetComponent implements OnInit {

  msg:string = '';
  @Input() name: string = ''
  @Output() ngTweetEvent = new EventEmitter<{}>();
  connected=false;
  charLeft = 50;

  tweets = [];

  constructor(private ngxElement: NgxElement) { }

  ngOnInit() {
  }

  connect() {
    alert("Angular App connected to the twitter");
    this.ngxElement.selector("mfe-react-tweet").on('onHelloEvt', (e) => this.onReactEvent(e));
    this.connected= true;
  }

  changeCharLeft() {
    let currentLength = this.msg.length;
    this.charLeft = 50 - currentLength;
  }

  onReactEvent(tweet) {
    console.log('tweet from react',tweet);
    let tweets = this.tweets;
    tweets.push(tweet);
    this.tweets = [...tweets];
  }


  onTweet() {
    let tweets = this.tweets;
    let tweet = {
      id: 'ng',
      msg: this.msg
    }
    tweets.push(tweet);
    this.tweets = [...tweets];
    this.ngTweetEvent.emit(tweet);
  }

}
