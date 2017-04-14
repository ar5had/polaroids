import React, { Component } from 'react';

import './styles.sass';

import { TWO, ONE } from '../../constants';
import Item from '../Item/index';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: TWO,
      showViewChanger: true
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
    window.addEventListener('resize', () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.decideView();
      }, 50);
    });
    this.decideView();
  }

  decideView() {
    if (window.innerWidth < 500) {
      this.setView(ONE);
    } else {
      this.setState({ showViewChanger: true });
    }
  }

  setView(view) {
    this.setState({ activeView: view });
  }

  getVCClass(view) {
    if (this.state.activeView === view)
      return 'selectedView';
  }

  getViewChanger() {
    if (window.innerWidth > 500) {
      return (
        <span>
          <span className={`onesquare ${this.getVCClass(ONE)}`}
            ref={node => { this.onesquareview = node; }}
            onClick={() => {
              this.setView(ONE);
            }}
          >
            <span className="square" />
            <span className="square" />
          </span>
          <span className={`twosquare ${this.getVCClass(TWO)}`}
            ref={node => { this.twosquareview = node; }}
            onClick={() => {
              this.setView(TWO);
            }}
          >
            <span className="onesquare">
              <span className="square" />
              <span className="square" />
            </span>
            <span className="onesquare">
              <span className="square" />
              <span className="square" />
            </span>
          </span>
        </span>
      );
    }
  }

  render() {
    return (
      <main className="main">
        <h4 className="heading">
          <span className="title">All Posts</span>
          {this.getViewChanger()}
        </h4>
        <div className={`itemsWrapper ${this.state.activeView}`}>
          {"1234567890".split("").map((e, i) => <Item key={i} />)}
        </div>
      </main>
    );
  }
}

export default Homepage;
