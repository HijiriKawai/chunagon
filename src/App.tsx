import React from 'react';
import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { AuthUserProvider, useAuthUser } from './components/context/UserAuthContext';
import { Footer } from './components/molecules/Footer';
import { Header } from './components/molecules/Header';
import { Top } from './components/pages/Top';
import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
  const authUser = useAuthUser();
  const isAuthenticated = authUser != null;

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return <Route {...props} />;
};

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const authUser = useAuthUser();
  const isAuthenticated = authUser != null;
  if (isAuthenticated) {
    return <Route {...props} />;
  }
  return <Redirect to={{ pathname: '/login', state: { from: props.location?.pathname } }} />;
};

function App() {
  return (
    <AuthUserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Top} />
          <UnAuthRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthUserProvider>
  );
}

export default App;
