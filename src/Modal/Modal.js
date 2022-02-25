import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
        </button>

        {
          this.state.isOpen && (
            <div className="modal">
              <div className="modal__body">
                <h2>Modal title</h2>
                <p>Modal text for example</p>
                <button onClick={()=>this.setState({isOpen: false})}>&times;</button>
              </div>
            </div>
          )
        }
      </>
    );
  }
}