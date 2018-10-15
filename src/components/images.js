import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

import logo from './logoghibli.svg';

class Image extends Component {
    render() {
        return (
            <div className="Image">
                <img src={logo} alt="logoGhibli" />
            </div>

        );
    }

}
export default Image;

// ReactDOM.render(<App />, document.getElementById('root'))