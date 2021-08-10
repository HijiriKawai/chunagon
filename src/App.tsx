import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from './components/molecules/Footer';
import { Header } from './components/molecules/Header';
import { Home } from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <switch>
        <Route path="/" component={Home} />
      </switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
