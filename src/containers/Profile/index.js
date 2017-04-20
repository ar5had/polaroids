import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/myItemsActions';

import loadPageProps from '../../utils/loadPageProps';
import BasicInfo from '../../components/BasicInfo/index';
import OtherInfo from '../../components/OtherInfo/index';

import './styles.sass';

class Profile extends Component {
  componentDidMount() {
    loadPageProps('Profile - Polaroids');
  }
  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo
          name={this.props.state.name}
          dp={this.props.state.dp}
        />
        <OtherInfo
          items={this.props.state.myItems}
          deleteItem={this.props.actions.deleteMyItem}
          ownItem={this.props.location.pathname === '/profile'}
        />
      </div>
    );
  }
}

Profile.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state: state.profileData });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
