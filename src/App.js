import './App.css';
import NavBar from "./components/NavBar";

import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';

import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import SignOutForm from './pages/auth/SignOutForm';

import ProjectCreateForm from './pages/projects/ProjectCreateForm';
import ProjectPage from './pages/projects/ProjectPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectEditForm from './pages/projects/ProjectEditForm';

import PopularArtAccounts from './pages/art_accounts/PopularArtAccounts';
import ArtistPage from './pages/art_accounts/ArtistPage';

import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useCurrentUser } from './contexts/CurrentUserContext';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const currentUser = useCurrentUser();
  const art_acc_id = currentUser?.artaccount_id || "";
  console.log(art_acc_id)


  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div>
          <NavBar/>
          <Container>
            
            <Switch>
              <Route exact path="/" render={() =>  <ProjectsPage message="No results." />}/>
              <Route exact path="/artist-page" render={() =>  <p>No results</p>} />
            </Switch>

            <Switch>
              <Route exact path="/search" render={() => <PopularArtAccounts />} />
              <Route exact path="/artist-page/:id" render ={() => <ArtistPage />} />
            </Switch>

            <Switch>
              <Route exact path="/watch-list" render={() => <ProjectsPage
                message="Projects you're watching will appear on this page."
//                filter={`likes__owner__profile=${art_acc_id}&ordering=-likes__created_at&`}
                filter={`watching_project__owner__art_acc=${art_acc_id}&ordering=-watching_project__created_at&`}
                />} />
              <Route exact path="/watch-list/projects" render={() => <h1>Watch list projects view</h1>} />
              <Route exact path="/watch-list/artists" render={() => <h1>Watch list artists view</h1>} />
            </Switch>

            <Switch>
              <Route exact path="/sign-up" render={() => <SignUpForm/>} />
              <Route exact path="/sign-in" render={() => <SignInForm/>} />
              <Route exact path="/sign-out" render={() => <SignOutForm/>} />
            </Switch>

            <Switch>
              <Route exact path="/projects/create" render={() => <ProjectCreateForm/>} />
              <Route exact path="/projects/:id" render={()=> <ProjectPage/>} />
              <Route exact path="/projects/:id/edit" render={()=> <ProjectEditForm/>} />
            </Switch>

          </Container>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
