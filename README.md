HiDoc is built upon React/ React Bootstrap.


Setup:
===

NPM
---
- In terminal (only if the root is empty):
`npx create-react-app - --use-npm`
- Why?
Creating a new setup upon an existing template or app will make the code hard to maintain and hard to make sense.
- If development is done with Gitpod, run this for every session, in terminal:
``nvm install 16 use 16`

Bootstrap:
---
- React-Bootstrap (ver 4) is specifically designed for React. To install (ver 4), run in terminal:
`npm install react-bootstrap@1.6.3 bootstrap@4.6.0`

Routing
---
- Enable the page to render content depending on the URL address.
- In terminal:
`npm install react-router-dom@5.3.0`
- Next, add this inside index.js:
`import {BrowserRouter as Router } from 'react-router-dom';`
- Then, add this inside index.js, inside <React.StrictMode>:
`
<Router>
  <App />
</Router>
`
- Why?
This setup will enable the navigation bar to render content depending on what button the user click.
- Inside App.js, add <Route> for each individual item that should be rendered. Include exact.

Font Awesome:
---
- HiDoc use icons borrowed from Font Awesome.
- Installment of Font Awesome is a string inside `public > index.html`


Tangle in development:
===
- Documentation of encountered problems and how they were solved:
- During development in Gitpod, it is neccessary to manually install npm for each session. Run in terminal:
`nvm install 16 use 16`

- when you run `npm start`, a port will be used to host the app. During development for HiDoc, that port was "3000".
- Should a port break, and cannot be stopped with the usual ctrl+C `keyboard command, run this in terminal:
`lsof -i :3000`
- Find the PID numbers for port 3000
- In terminal:
`kill -9 (PID number)`

- The default setup inside `index.js` that came with npx installment didn't render links properly.
- (Image of old setup that don't work)
- The code inside `index.js` was borrowed from Moments by Code Institute, a setup that works.


Run:
---
- In terminal:
`npm start`
You may need to change the directory
...


Components/ Features:
===
Most JavaScript components can be found inside `src > components`, exceptions are documented later,
Every corresponding CSS component can be found inside `src > styles`, 
These details are important if the `.js` need to be relocated. In that case, the directory path need to be edited inside `apps.py`.

Navigation bar "Navbar":
---
- This component satisfy the "Navbar" user story.
- Uses can navigate trough 
- Uses { Navbar, Container, Nav } from React-Bootstrap
- The navigation bar will collapse when the size isn't wide enough to fit the content. This is achieved by implimenting the use of `Navbar.Toggle` and `Navbar.Collapse`.
- `Navbar.Toggle` makes up the 'hamburger' button.
- `Navbar.Collapse` wrap the items that should be hidden inside the 'hamburger' button.
- Switch and route

Sign-in page:
---
- This feature satisfy the "Sign-in" user story.
- This page is located inside `src > pages > auth`.


Agile development:
===
This section cover the tactical approach taken before and during development.

The user stories list priority features with a number. The higher the number, the less important those features are. HiDoc use an agile approach, meaning the less important user stories were only developed after the current priority were polished to a standard sufficient to be deployed.

HiDoc is a project following a criteria with expectations set by Code Institute. Code Institute did provide a training project that satisfy all the expectations. To secure the highest chance of passing the expectations, this project follow a similar model to that training project. These are the features on a table from Code institutes training project, as well as hot HiDoc remix these features:
- CI Training project - HiDoc
- post - project
- like - watch
- comment - documentation
- follow - watch list
The HiDoc equivalents however, are not copies masked behind a different name. For instance, the comment from the Code Institute Training project are created by the read-only user, whereas the documentation is created by the owner. The watch and follow models from the training are seperate features from the training project, whereas HiDoc merge them into one.


User stories:
===
1. Absolutely essential, without these stories, HiDoc cannot exist:
- Navbar:
As a user, I can see a navigation bar from every page so that I can easily navigate around HiDoc. So that whatever I want to do is accessible.
- Navbar collapse:
As a user on a small screen/ small window, the navigation bar is hidden inside a 'hamburger' button. So that the navigation bar don't take up space on the small screen/ window.
- Sign Up:
As a user, I can sign up.
- Sign In:
As a user, I can sign in.
- Sign out:
As a signed in user, I can sign out.
- Portfolio:
As a signed in user, I can see my name and all my projects in a porfolio page.
- Create project:
As a signed in user, inside my portfolio page, I can click a button that let me create a new project to my property, and give it a name.
- Edit projects:
As a signed in user, inside my porfolio page, I can click a button for any of my projects, that let me change its name.
- Delete projects:
As a signed in user, inside my portfolio page, I can click a button for any of my projects, that let me delete it and all its content.
- Add text object:
As a signed in user, inside my project, I can click a button that adds a text object.
- Edit text object:
As a signed in user, inside my project, I can click a button that changes the content of an existing text object.
- Delete text object:
As a signed in user, inside my project, I can click a button that deletes an existing text object.
- Add image object:
As a signed in user, inside my project, I can click a button that adds an image object.
- Delete image object:
As a signed in user, inside my project, I can click a button that deletes an existing image object.
- Reassign object:
As a signed in user, inside my project, I can click and drag any object to rearrange the order they appear.

2. Essential, HiDoc would be functional, but not complete without these:
- Browse:
As a user, I can browse all public projects. So that I can find inspiration.
- Search artist:
As a user, I can search for artists by entering their name and see their name appear with a hyperlink to their portfolio. So that I can find artists I know the name of.
- Watch list: As a signed in user, I can find a list of all projects I've clicked Watch, so that I can save all the projects I have interest in.
- Watch button:
As a signed in user, looking at any project, I can click a Watch button that will add that project to my Watch list. So that I can save all the projects I have interst in.
- Unwatch button:
As a signed in user, who have clicked the watch button for any project, I can click it again to unwatch it. So that projects I don't want in my watch list are gone.

3. Optional, HiDoc don't need these, but they are valuable features:
- Watch count: As a user, I can see how many people are watching a project. So that I know how much attention the project has.


Credits:
===
Reference: Code Institute
Icons: Font Awesome