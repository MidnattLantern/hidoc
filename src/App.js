import './App.css';
import NavBar from "./components/NavBar";

import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';

import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';

import ProjectCreateForm from './pages/projects/ProjectCreateForm';
import ProjectPage from './pages/projects/ProjectPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectEditForm from './pages/projects/ProjectEditForm';

import SearchArtists from './pages/art_accounts/SearchArtists';
import ArtistPage from './pages/art_accounts/ArtistPage';

import { createContext } from 'react';
import { useCurrentUser } from './contexts/CurrentUserContext';

import NotFound from './components/NotFound';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const currentUser = useCurrentUser();
  const art_acc_id = currentUser?.artaccount_id || "";


  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div>
          <NavBar/>
          <Container>
            
            <Switch>
              <Route exact path="/" render={() =>  <ProjectsPage message="No results." />}/>

              <Route exact path="/artist-page" render={() =>  <NotFound />} />
              <Route exact path="/artist-page/:id" render ={() => <ArtistPage />} />

              <Route exact path="/watch-list" render={() => <ProjectsPage
                message="Projects you're watching will appear here."
                filter={`watching_project__owner__artaccount=${art_acc_id}&ordering=-watching_project__created_at&`}
                />} />
 
              <Route exact path="/sign-up" render={() => <SignUpForm/>} />
              <Route exact path="/sign-in" render={() => <SignInForm/>} />

              <Route exact path="/projects/create" render={() => <ProjectCreateForm/>} />
              <Route exact path="/projects/:id" render={()=> <ProjectPage/>} />
              <Route exact path="/projects/:id/edit" render={()=> <ProjectEditForm/>} />

              <Route render={() => <NotFound />} />
            </Switch>

          </Container>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
