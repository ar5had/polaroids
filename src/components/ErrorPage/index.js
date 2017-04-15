import React, { Component } from 'react';

import loadPageProps from '../../utils/loadPageProps';

import './styles.sass';

class ErrorPage extends Component {
  componentDidMount() {
    loadPageProps('404 - Page Not Found!');
  }

  render() {
    return (
      <h3 className="error text-center">404(Page Not Found)</h3>
    );
  }
}

export default ErrorPage;
