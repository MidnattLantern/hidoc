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


Run:
---
- In terminal:
`npm start`
You may need to change the directory
...


Components:
===
Every JavaScript component can be found inside `src > components`,
Every corresponding CSS component can be found inside `src > styles`, 

Navigation bar "Navbar":
---
- This component satisfy the "Navbar" user story.
- Uses can navigate trough 
- Uses { Navbar, Container, Nav } from React-Bootstrap
- The navigation bar will collapse when the size isn't wide enough to fit the content. This is achieved by implimenting the use of `Navbar.Toggle` and `Navbar.Collapse`.
- `Navbar.Toggle` makes up the 'hamburger' button.
- `Navbar.Collapse` wrap the items that should be hidden inside the 'hamburger' button.


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