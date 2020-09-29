import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import ElevatorButton from './components/ElevatorButton';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/**
 handleClick(e) {
  //   const buttonId = e.target.id;
  //   this.setState((state, props) => {
  //     const btns = this.state.buttons;
  //     return ({
  //       buttons: btns.map(el => {
  //         if (el.id == buttonId) {
  //           el.isOn = true;
  //         }
  //         return el;
  //       })
  //     })
  //   })
  // }
 */