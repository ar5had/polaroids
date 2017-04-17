import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './styles.sass';

class Item extends Component {
  getBtns(hasUserLiked, likesCount) {
    // change this line with some redux server code
    const ownItem = window.location.pathname === '/profile';
    if(ownItem) {
      return (
        <div className="pauthinfo">
          {likesCount}
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
        <span className="heart-buttons"
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
    const {
      caption,
      likesCount,
      hasUserLiked,
      picture,
      // photoIds
    } = this.props;

    return (
      <div className="item">
        <div className="picture"
          style={{ backgroundImage: `url(${picture})` }}
        />
        <div className="info">
          <span className="pmf pname">{caption}</span>
          <div className="pauthinfo">
            {this.getBtns(hasUserLiked, likesCount)}
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  photoId: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  hasUserLiked: PropTypes.bool.isRequired,
  likesCount: PropTypes.number.isRequired
};

export default Item;
