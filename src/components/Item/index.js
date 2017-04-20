import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './styles.sass';

class Item extends Component {
  getBtns(hasUserLiked, likesCount, ownerName, ownerDp, photoId) {
    // change this line with some redux server code
    if(this.props.ownItem) {
      return (
        <div className="pauthinfo">
          {likesCount ? likesCount : ''}
          <span className={hasUserLiked ? "heart-button liked" : "heart-button"}
            ref={node => { this.hbtn = node; }}
            onClick={(e) => {
              this.props.toggleFavItem(photoId, e.target);
            }}
          />
          <span className="delete-button"
            onClick={(e) => {
              const parent = e.target.parentNode.parentNode.parentNode;
              parent.classList.add('deleted');
              this.props.deleteItem(this.props.photoId, parent);
            }}
          />
        </div>
      );
    }

    return (
      <div className="pauthinfo">
        {likesCount ? likesCount : ''}
        <span className={hasUserLiked ? "heart-button liked" : "heart-button"}
          onClick={(e) => {
            this.props.toggleFavItem(photoId, e.target);
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
      photoId,
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
          {this.getBtns(hasUserLiked, likesCount, ownerName, ownerDp, photoId)}
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
  ownerDp: PropTypes.string,
  deleteItem: PropTypes.func,
  location: PropTypes.string,
  ownItem: PropTypes.bool,
  toggleFavItem: PropTypes.func.isRequired
};

export default Item;
