import './App.css';
import NavBar from "./components/NavBar";

import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';

import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import SignOutForm from './pages/auth/SignOutForm';

function App() {
  return (
    <div>
      <NavBar/>
      <Container>
        
        <Switch>
          <Route exact path="/" render={() => <h1>Browse view</h1>} />
        </Switch>

        <Switch>
          <Route exact path="/search" render={() => <h1>Search artist view</h1>} />
        </Switch>

        <Switch>
          <Route exact path="/watch-list" render={() => <h1>Watch list view</h1>} />
        </Switch>

        <Switch>
          <Route exact path="/sign-up" render={() => <SignUpForm/>} />
        </Switch>

        <Switch>
          <Route exact path="/sign-in" render={() => <SignInForm/>} />
        </Switch>

        <Switch>
          <Route exact path="/sign-out" render={() => <SignOutForm/>} />
        </Switch>

      </Container>
    </div>
  );
}

export default App;
