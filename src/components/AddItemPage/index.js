import React, { Component, PropTypes } from 'react';

import addImg from '../../assets/images/add.svg';

import './styles.sass';

class AddItemPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.modalWrapper.classList.add(this.props.openClass);
    }, 50);
  }

  close() {
    this.modalWrapper.classList.remove(this.props.openClass);
    setTimeout(() => {
      this.props.close();
    }, 710);
  }

  render() {
    return (
      <div className="addItemWrapper" ref={node => { this.modalWrapper = node; }}>
        <div className="hider" />
        <div className="modal">
          <div className="heading">
            <h3>New Post</h3>
          </div>
          <div className="itemWrapper">
            <div className="itemPicWrapper">
              <div className="imgWrapper">
                <div className="img">
                  <img src={addImg} />
                </div>
                <input className="captionText pmf" type="text" autoComplete="off"
                  required="true" placeholder="Caption"
                />
              </div>
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="saveItemBtn" onClick={this.close.bind(this)}>Post</button>
            <button className="cancelItemBtn" onClick={this.close.bind(this)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

AddItemPage.propTypes = {
  close: PropTypes.func,
  openClass: PropTypes.string
};

export default AddItemPage;
