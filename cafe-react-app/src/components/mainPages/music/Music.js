import React, {Component} from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi();



class Music extends Component {
  constructor(props){
    super(props);
    this.state = { music: [] };
    this.handleReload();
  }
  async handleReload(event) {
    const response = await api.music({ date: '' });
    this.setState({ music: response });
  }

  render() {
    return <div className="container">
    <div className="title">Choose your exhibition</div>
    <div className="music">
      
      {this.state.music.map(
        (music) => {
          return <div className="music-item">
            <img src={music.image}></img>
            <div className="name">{music.genre}</div>
            <div className="title-min"></div>
            <div className="song"><img src={music.avatar}></img>{music.author} {music.music}</div>
          </div>
        }
      )}
    </div>  
    </div>
  }
}

export default Music;