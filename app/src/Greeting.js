import React from 'react';

import electro from './images/electronics/image.jpg';

export default class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='greeting'>
        <pre>Hello, {this.props.name}!</pre>
        <img src={electro} width={64}/>
      </div>
    );
  }
}