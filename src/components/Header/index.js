import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.sass';

import AddItemPage from '../AddItemPage/index';

import pimg from '../../assets/images/polaroidb.svg';
import addimg from '../../assets/images/add.svg';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  componentWillMount() {
    this.previousWidth = 0;
    this.menuButton = (
      <button className="menuBtn"
        onClick={
          () => {
            document.querySelector(".menu").classList.toggle("open");
          }
        }
      >
        MENU
      </button>
    );

    this.loggedInMenu = (
      <div className="menu">
        <Link onlyActiveOnIndex={true} key={1} to="/" activeClassName="activeNavLink" className="navLink">
          Posts
        </Link>
        <Link onlyActiveOnIndex={true} key={2} to="/profile" activeClassName="activeNavLink" className="navLink">
          Profile
        </Link>
        <Link onlyActiveOnIndex={true} key={3} to="/favourites" activeClassName="activeNavLink" className="navLink">
          Favourites
        </Link>
        <Link onlyActiveOnIndex={true} key={4} to="/login" activeClassName="activeNavLink" className="navLink">
          Login | Signup
        </Link>
      </div>
    );

    this.loggedOutMenu = (
      <div className="menu loginMenu">
        <Link onlyActiveOnIndex={true} key={5} activeClassName="activeNavLink" className="navLink">
          Login | Signup
        </Link>
      </div>
    );

    this.setNav();
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setMenuState(window.innerWidth);
    });
  }

  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 500) {
        const menu = document.querySelector('div.menu');
        if(menu) {
          menu.classList.remove("open");
        }
        this.setState({menuActive: false});
      } else {
        this.setState({menuActive: true});
      }
      this.previousWidth = width;
    }
  }

  setNav() {
    // check for auth here
    const True = true;
    if (True) {
      this.setState({ nav: this.loggedInMenu });
    } else {
      this.setState({ nav: this.loggedOutMenu });
    }
  }

  getFixedButtons() {
    return (
      <button className="fbWrapper" onClick={
        () => {
          this.openModal();
        }
      }>
        <img src={addimg} />
      </button>
    );
  }

  closeModal() {
    this.setState({ modalOpened: false });
    document.body.classList.remove('modal-opened');
    document.body.style.marginRight = 0;
  }

  getModal() {
    if (this.state.modalOpened) {
      return (
        <AddItemPage
          openClass="open" close={this.closeModal.bind(this)}
          addItem={this.closeModal.bind(this)} />
      );
    }
  }

  openModal() {
    const scrollBar = document.querySelector('.scrollbar-measure');
    const scrollBarWidth = scrollBar.offsetWidth - scrollBar.clientWidth;
    document.body.classList.add('modal-opened');
    document.body.style.marginRight = `${scrollBarWidth}px`;
    // const fbw = document.querySelector('.fbWrapper');
    this.setState({ modalOpened: true });
  }


  render() {
    return (
      <header className="header">
        <h1>
          <Link onlyActiveOnIndex={true} to="/" className="logo">
            <img src={pimg} />
          </Link>
        </h1>
        {this.state.menuActive ? this.menuButton: ""}
        {this.state.nav}
        {this.getFixedButtons()}
        {this.getModal()}
      </header>
    );
  }
}

export default Header;
