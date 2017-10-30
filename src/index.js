import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App';
import { HashRouter } from 'react-router-dom';
import {skills, eduList, jobsList} from './data/datasource.js';



class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <AppContainer />
      </HashRouter>
    );
  }
}


ReactDOM.render(<AppRouter  />, document.getElementById('root'));
