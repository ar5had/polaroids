import React, { Component } from 'react';
// import {Link} from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item">
        <div className="picture">

        </div>
        <div className="info">
          Some polaroid
        </div>
      </div>
    );
  }
}

export default Item;
