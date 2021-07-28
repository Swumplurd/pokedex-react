import React from 'react';
import ReactDOM from 'react-dom';
import { PokedexApp } from './components/PokedexApp/PokedexApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <div class="container">
    <div class="row">
      <div class="col-12">
        <PokedexApp />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);