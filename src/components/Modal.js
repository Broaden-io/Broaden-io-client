import React from 'react';
import {SkyLightStateless} from 'react-skylight';

class Modal extends React.Component {

  render() {

    return (
      <div>
        <SkyLightStateless
          isVisible={this.props.isVisible}
          onCloseClicked={() => {this.props.toggle()}}
          title="A Stateless Modal"
        >
          I'm a Stateless modal!
        </SkyLightStateless>
      </div>
    )
  }
}

Modal.displayName = 'Message';

export default Modal;
