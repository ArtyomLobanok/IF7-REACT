import React from 'react';
import './TextOfHeaders.css';

class TextOfHeaders extends React.Component {
    render () {
        let label;
        ({label} = this.props);
        return <h2>{ label }</h2>;
    }
}

export default TextOfHeaders;