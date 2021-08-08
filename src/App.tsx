import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
