import React from 'react';
import './Button.css'





var Button = React.createClass({
    render: function () {
      return (
        <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.props.handleClick}>{this.props.label}</button>
      );
    }
  });


export default Button;