import styled from '@emotion/styled';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { Home } from './components/pages/Home';
import { Question } from './components/pages/Question';
import { Top } from './components/pages/Top';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
  font-size: 16px;
  color: #333;
  background-color: #f6f6f4;
  letter-spacing: 1.5px;
  line-height: 1.75;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/question/:questionID" component={Question} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
