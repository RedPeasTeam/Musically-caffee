import React, {Component} from 'react';
// import * as Api from 'typescript-fetch-api';

class Cafes extends Component {

    // constructor(props){
  //   super(props);
  //   this.state = { caffee: [] };
  //   this.handleReload();
  // }
  // async handleReload(event) {
  //   const response = await api.caffee({ date: '' });
  //   this.setState({ caffee: response });
  // }
  render() {
    return <div className="container">
    <div className="title">Choose your exhibition</div>
    <div className="exhibitions">
      
      {this.state.caffee.map(
        (caffee) => {
          return <div className="caffee-item">
            <img src={caffee.image}></img>
            <div className="name">{caffee.name}</div>
            <div className="title-min"></div>
            <div className="cafe-description"><span class="cafe-lorem">{caffee.caffeedescription}</span>
            <span class="location">{caffee.city},{caffee.address}</span>
            <span class="company-name">{caffee.companyname}</span>
            </div>
          </div>
        }
      )}
    </div>  
    </div>
  }
}

export default Cafes;