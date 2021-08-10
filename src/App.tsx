import React from 'react';
import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { AuthUserProvider, useAuthUser } from './components/context/UserAuthContext';
import { Footer } from './components/molecules/Footer';
import { Header } from './components/molecules/Header';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
  const authUser = useAuthUser();
  const isAuthenticated = authUser != null;

  if (isAuthenticated) {
    return <Redirect to="/" />;
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
          <UnAuthRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthUserProvider>
  );
}

export default App;
