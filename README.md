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


User stories:
===
- Navbar: As a user, I can see a navigation bar from every page so that I can easily navigate around HiDoc.
- Navbar: As a user on a small screen/ small window, the navigation bar is hidden inside a 'hamburger' button, so that the navigation bar don't take up space on the small screen/ window.
- Sign Up: As a user, I can sign up.
- Sign In: As a user, I can sign in.


Credits:
===
Reference: Code Institute
Icons: Font Awesome