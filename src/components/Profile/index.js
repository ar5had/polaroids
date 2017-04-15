import React, { Component } from 'react';

import loadPageProps from '../../utils/loadPageProps';
import BasicInfo from '../BasicInfo/index';
import OtherInfo from '../OtherInfo/index';
import './styles.sass';

class Profile extends Component {
  componentDidMount() {
    loadPageProps('Profile - Polaroids');
  }
  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo />
        <OtherInfo />
      </div>
    );
  }
}

export default Profile;
