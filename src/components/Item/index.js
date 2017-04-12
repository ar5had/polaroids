import React, { Component } from 'react';
// import {Link} from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item">
        <div className="picture" />
        <div className="info">
          <span className="pmf pname">Some polaroid</span>
        </div>
      </div>
    );
  }
}

export default Item;
