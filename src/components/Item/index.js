import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './styles.sass';

class Item extends Component {
  getBtns(hasUserLiked, likesCount, ownerName, ownerDp) {
    // change this line with some redux server code
    const ownItem = ownerName === undefined;
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
        {likesCount ? likesCount : ''}
        <span className="heart-button"
          ref={node => { this.hbtn = node; }}
          onClick={() => {
            this.hbtn.classList.toggle('liked');
          }}
        />
        <Link className="author-img">
          <span style={{backgroundImage: `url(${ownerDp})`}}>{ownerName}</span>
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
      ownerName,
      ownerDp
    } = this.props;

    return (
      <div className="item">
        <div className="picture"
          style={{ backgroundImage: `url(${picture})` }}
        />
        <div className="info">
          <span className="pmf pname">{caption}</span>
          <div className="pauthinfo">
            {this.getBtns(hasUserLiked, likesCount, ownerName, ownerDp)}
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  photoId: PropTypes.number,
  picture: PropTypes.string,
  caption: PropTypes.string,
  hasUserLiked: PropTypes.bool,
  likesCount: PropTypes.number,
  ownerName: PropTypes.string,
  ownerDp: PropTypes.string
};

export default Item;
