import React, { Component } from 'react';

import loadPageProps from '../../utils/loadPageProps';
import Item from '../../components/Item';

import './styles.sass';

class Favourites extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    loadPageProps('Favourites - Polaroids');
  }

  render() {
    return (
      <div className="favourites">
        <h4 className="heading">Your Favourites</h4>
        <div className="favpolaroidsWrapper mypolaroidsWrapper">
          {"123456790".split("").map((e, i) => <Item key={i} />)}
        </div>
      </div>
    );
  }
}

export default Favourites;
