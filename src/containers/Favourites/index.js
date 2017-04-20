import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleFavItem } from '../../actions/favActions';
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

Favourites.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  toggleFav: PropTypes.func.isRequired,
  favItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({ state: state.appData.favourites });
const mapDispatchToProps = (dispatch) => ({toggleFavItem: bindActionCreators(toggleFavItem, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
