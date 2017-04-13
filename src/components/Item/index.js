import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.sass';

class Item extends Component {
  getBtns() {
    // change this line with some redux server code
    const ownItem = window.location.pathname === '/profile';
    if(ownItem) {
      return (
        <div className="pauthinfo">
          <span className="delete-button"
            ref={node => { this.dbtn = node; }}
            onClick={() => {
              this.dbtn.classList.add('deleted');
            }}
          />
        </div>
      );
    }
    return (
      <div className="pauthinfo">
        <span className="heart-button"
          ref={node => { this.hbtn = node; }}
          onClick={() => {
            this.hbtn.classList.toggle('liked');
          }}
        />
        <Link className="author-img">
          <span>Arshad Khan </span>
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div className="item">
        <div className="picture" />
        <div className="info">
          <span className="pmf pname">Some polaroid</span>
          <div className="pauthinfo">
            {this.getBtns()}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
