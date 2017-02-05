import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

import styles from './css/style.styl';
import image from './images/abstract.jpg'

ReactDOM.render(
  <div>
    <Greeting name="df"/>
    <img src={image} />
  </div>, document.getElementById('app'));
