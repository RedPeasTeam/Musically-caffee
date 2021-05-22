import React, {Component} from 'react';
import * as Api from 'typescript-fetch-api';


const api = new Api.DefaultApi();


class Exhibition extends Component {
  constructor(props){
    super(props);
    this.state = { exhibition: [] };
    this.handleReload();
  }
async handleReload(event) {
    const response = await api.exhibition({ date: '' });
    this.setState({ exhibition: response });
  }

  render() {
    return <div className="container">
      <div className="title">Choose your exhibition</div>
      <div className="exhibitions">
        
        {this.state.exhibition.map(
          (exhibition) => {
            return <div className="exhibition-item">
              <img src={exhibition.imageexhibi}></img>
              <div className="name">{exhibition.nameexhibi}</div>
              <div className="cost">{exhibition.costexhibi}&#36;</div>
            </div>
          }
        )}
      </div>
      <div className="title">Choose your guide</div>
      <div className="guides">
      
        {this.state.exhibition.map(
          (exhibition) => {
            return <div className="guides-item">
              <img src={exhibition.imageguide}></img>
              <div className="name"><span className="item-title">Name: </span>{exhibition.nameguide}</div>
              <div className="cost"><span className="item-title">Ratio: </span>{exhibition.ratioguide}</div>
            </div>
          }
        )}
      </div>
    </div>
  }
}

export default Exhibition;