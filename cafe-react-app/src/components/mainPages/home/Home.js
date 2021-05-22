import React, {Component} from 'react';
import homeimage from '../../../img/home.jpg';
// import * as Api from 'typescript-fetch-api';

let divstyles = {
    backgroundImage: 'url(' + homeimage + ')',
};


class Home extends Component {
  

  render() {
    return <div className="main">
        <h1>AniSpec</h1>
        <div>Welcome to the AniSpec</div>
        <div style={divstyles} className="image">

        </div>
        
    </div>
  }
}

export default Home;