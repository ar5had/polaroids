import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/myItemsActions';
import { toggleFavItem } from '../../actions/favActions';

import loadPageProps from '../../utils/loadPageProps';
import BasicInfo from '../../components/BasicInfo/index';
import OtherInfo from '../../components/OtherInfo/index';

import './styles.sass';

class Profile extends Component {
  componentDidMount() {
    loadPageProps('Profile - Polaroids');
  }

  isPublicPage() {
    return this.props.params.id ? true : false;
  }

  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo
          name={this.props.state.name}
          dp={this.props.state.dp}
        />
        <OtherInfo
          ownerName={this.props.state.name}
          isPublicPage={this.isPublicPage()}
          items={this.props.state.myItems}
          deleteItem={this.props.actions.deleteMyItem}
          ownItem={this.props.location.pathname === '/profile'}
          favItems={this.props.favItems}
          toggleFavItem={this.props.toggleFavItem}
        />
      </div>
    );
  }
}

Profile.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  toggleFavItem: PropTypes.func.isRequired,
  favItems: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state: state.profileData, favItems: state.favourites });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch), toggleFavItem: bindActionCreators(toggleFavItem, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
