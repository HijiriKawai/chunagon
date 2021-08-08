import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" component={Home} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
