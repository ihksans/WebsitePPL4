import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Media } from 'reactstrap';

var style = {
    backgroundColor: "#404040",
    borderTop: "5px solid #CC99FF",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    color:"#CC99FF",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                    <Media>Ini Footer</Media>
                </div>
            </div>
        );
    }
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer/>, document.getElementById('footer'));
}
