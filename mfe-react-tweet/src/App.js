import React from 'react';
import './App.css';
import { JsxElementUtil } from './jsx-element-util';

class App extends React.Component {

  state = {
    tweets : [],
    msg: '',
    charLeft : 50,
    connected: false
  }

  connect() {
    alert("React connected the tweet!");
    this.setState({connected:true});
    JsxElementUtil.on("mfe-ng-tweet","ngTweetEvent", (tweet) => {
      console.log('tweet from ng',tweet);
      let tweets = this.state.tweets;
      tweets.push(tweet);
      this.setState({tweets:[...tweets]});
    })
  }

  onTweet(e) {
    let tweets = this.state.tweets;
    let tweet = {
      id: 'react',
      msg: this.state.msg
    }
    tweets.push(tweet);
    JsxElementUtil.emit("mfe-react-tweet","onHelloEvt",tweet);
    this.setState({state:[...tweets]});
  }
  

  onMsgChange(e) {
    let currentLength = e.target.value.length;
    let charLeft = 50 - currentLength;
    this.setState({msg: e.target.value, charLeft:charLeft})
  }

  render() {
    const { tweets, charLeft, connected } = this.state;
    return (
          <div className="container">
                <button disabled={connected} onClick={() => this.connect()} class="btn btn-primary tweet">
        Connect</button>
            <div id="box">    
              <div className="bottom container">
                <textarea maxLength={50} onChange={(e) => this.onMsgChange(e)} placeholder="What's happening?"></textarea>
                <div className="row">        
                  <div className="bottom-right">
                    <span id='countdown'> {charLeft}</span>
                    <button onClick={(e) => this.onTweet(e)} className="btn btn-primary tweet">
                    Tweet</button>
                  </div> 
                </div>
              </div> 
            </div>
            <div className="message-container">
              {
                tweets.map((tweet,i) => {
                  if(tweet.id==='react') {
                    return (
                      <div className="chat-container" key={i}>
                        <img src="https://webologixglobal.com/wp-content/uploads/2019/08/react-native-300x300.png" alt="Avatar" />
                        <p>{tweet.msg}</p>
                      </div>
                    );
                  }
                  else {
                    return (
                      <div className="chat-container darker" key={i}>
                        <img src="https://plugins.jetbrains.com/files/6971/preview_13184.png" alt="Avatar" className="right" />
                        <p>{tweet.msg}</p>
                      </div>
                    );
                  }
                })
              }
            </div>
        </div>
    );
  }
}

export default App;
