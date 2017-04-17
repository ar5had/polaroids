import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.sass';

import * as actions from '../../actions/myItemsActions';
import loadPageProps from '../../utils/loadPageProps';
import { TWO, ONE } from '../../constants';
import Item from '../../components/Item/index';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: TWO,
      showViewChanger: true
    };
  }

  componentDidMount() {
    loadPageProps('Polaroids');
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

  getAllItemsData() {
    const data = this.props.state;
    if(data.length > 0) {
      return data.map((e) =>
        <Item
          key={e.key}
          photoId={e.key}
          picture={e.picture}
          caption={e.caption}
          hasUserLiked={e.hasUserLiked}
          likesCount={e.likesCount}
        />
      );
    } else {
      return <h3 className="noItemHeading"> No items found!</h3>;
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
          {this.getAllItemsData()}
        </div>
      </main>
    );
  }
}


Homepage.propTypes = {
  state: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state: state.allItemsData });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
