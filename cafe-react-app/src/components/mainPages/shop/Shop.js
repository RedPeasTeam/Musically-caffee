import React, {Component} from "react";
import * as Api from 'typescript-fetch-api';
const api = new Api.DefaultApi();
class Shop extends Component{
   constructor(props) {
      super(props);
      this.state = {shop: []};
      this.handleReload()
   }
   async handleReload() {
      const response = await api.shop({ date: '' });
      this.setState({ shop: response });
   }
    render() {
       const vlad = this.state.shop.map((element) => 
         <div className='quest-item-wrapper'>
         <div className='quest-item-nav'>
            <img className='quest-img-nav' src={element.imageproduct} />
            <div className='quest-info-nav'>
            <div className='quest-name'>{element.nameproduct}</div>

            <div className='people'>
            <div className='difficulty-nav'>{element.price}</div>
         </div>
      </div>
<div className='btn-nav'>
   <p>
   Купить
   </p>
   </div>
   </div>
        </div>
       )
        return (
           <div>
           <div className = "section__gallery">
              <h2>DISCOVER THE ART</h2>
           </div>
           <div className='quest-gallery-nav'>
               {vlad}  
            </div>
           </div>
        );
    }
}

export default Shop;