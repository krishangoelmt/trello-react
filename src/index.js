import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom"
import Store from "./store"
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Store>
       <Router>
          <App />
        </Router>
       </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
