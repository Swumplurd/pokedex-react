import React from 'react';
import ReactDOM from 'react-dom';
import { PokedexApp } from './components/PokedexApp/PokedexApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 p-0">
        <PokedexApp />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);