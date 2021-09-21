import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { AuthUserProvider, useAuthUser } from './components/context/UserAuthContext';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { Top } from './components/pages/Top';
import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { Signup } from './components/pages/Signup';
import { Question } from './components/pages/Question';

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
    <AuthUserProvider>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Top} />
            <UnAuthRoute exact path="/login" component={Login} />
            <UnAuthRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/question/:questionID" component={Question} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </AuthUserProvider>
  );
}

export default App;
