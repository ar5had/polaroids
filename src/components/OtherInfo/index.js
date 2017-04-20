import React, { Component, PropTypes } from 'react';

import Item from '../Item';

import './styles.sass';

class OtherInfo extends Component {
  constructor(props) {
    super(props);
  }

  getAllItemsData() {
    const data = this.props.items;

    if(data.length > 0) {
      const items = data.map((e) =>
        <Item
          key={e.key}
          photoId={e.key}
          picture={e.picture}
          caption={e.caption}
          hasUserLiked={true}
          likesCount={e.likesCount}
          ownerName={e.ownerName}
          ownerDp={e.ownerDp}
          deleteItem={this.props.deleteItem}
          ownItem={this.props.ownItem}
        />
      );
      return (
        <div className={`myPolaroidsWrapper`}>
          {items}
        </div>
      );
    } else {
      return (
        <div className="noItemHeadingWrapper">
          <h3 className="noItemHeading pmf"> No post found!</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="otherInfo">
        <h4 className="heading">Your Posts</h4>
        {this.getAllItemsData()}
      </div>
    );
  }
}

OtherInfo.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func,
  ownItem: PropTypes.bool
};

export default OtherInfo;
