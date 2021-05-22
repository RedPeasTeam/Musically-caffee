import React, {Component} from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi();

class Cafes extends Component {

    constructor(props){
    super(props);
    this.state = { caffee: [] };
    this.handleReload();
  }
  async handleReload(event) {
    const response = await api.caffee({ date: '' });
    this.setState({ caffee: response });
  }
  render() {
    return <div className="container">
    <div className="title">Choose your cafe</div>
    <div className="caffee">
      
      {this.state.caffee.map(
        (caffee) => {
          return <div className="caffee-item">
            <img src={caffee.image}></img>
            <div className="name">{caffee.name}</div>
            <div className="cafe-description"><div class="cafe-lorem">{caffee.caffeedescription}</div>
            <div class="location">{caffee.city},{caffee.address}</div>
            <div class="company-name">Created by {caffee.companyname}</div>
            </div>
          </div>
        }
      )}
    </div>  
    </div>
  }
}

export default Cafes;