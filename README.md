HiDoc
===
HiDoc is a platform designed for artists and illustrators to share and document their creative process. Unlike other art-sharing platforms such as ArtStation, DeviantArt, X, or Pinterest, HiDoc is optimized for documenting the creative process rather than just the finished product. The current versioin of the platform allows artists to document their artwork by writing paragraphs that record the date of documentation. The  poster can be updated whenever they want. They can also leave links to any site where they want to be seen, using the deployed link feature. 

HiDoc is designed to complement existing artist sharing platforms with niche features that are appropriate for documenting the creative process. Therefore, HiDoc does not have a like or follow feature since that does not contribute to the value of documentation. It does however, have a "watch project" feature that allows users to save and keep track of interesting projects.

There are many reasons why an artist might want to document their art projects, mainly to save credibility. The ambition with the HiDoc project is that artists can link to a HiDoc project page in their description, reducing plagiarism, where AI-generated artwork is discredited since the process of AI-generated art cannot be documented. With HiDoc, human artists with a certain artistic direction are not accused of using AI since that can be documented.

HiDoc is built upon React/ React Bootstrap, connected to a Django API trough Axios.

More features will come in the future, such as documenting images alongside paragraphs.

Deployed link: https://hidoc-144446eddf75.herokuapp.com/
API repository: https://github.com/MidnattLantern/HiDoc-API.git 

User stories:
---
User stories for HiDoc can also be found on Github: https://github.com/users/MidnattLantern/projects/9 

Navbar:
- As a user, I can see a navigation bar from every page so that I can easily navigate around HiDoc. So that whatever I want to do is accessible.

Navbar collapse:
- As a user on a small screen/ small window, the navigation bar is hidden inside a 'hamburger' button. So that the navigation bar doesn't take up space on the small screen/ window.

Sign Up:
- As a user, I can sign up.

Sign In:
- As a user, I can sign in.

Sign out:
- As a signed-in user, I can sign out.

My projects:
- As a signed-in user, I can access my projects in a "My projects" page.

Create a project:
- As a signed-in user, I can click a button that lets me create a new project, so that I can start documenting that project.

Edit projects:
- As a signed-in user, I can click a button for any of my projects, that lets me change its content.

Delete projects:
- As a signed-in user, I can click a button for any of my projects, that lets me delete it and all its content.

Browse:
- As a user, I can browse all public projects. So that I can find inspiration.

Watch list: As a signed-in user, I can find a list of all projects I've clicked Watch so that I can save all the projects I - have interest in.

Browse detail:
- As a user, I can see the project in more detail, so that I can acces the watch button and the documentations.

Watch button:
- As a signed-in user, looking at any project, I can click a Watch button that will add that project to my Watch list. So that I can save all the projects I have an interest in.

Unwatch button:
- As a signed-in user, who has clicked the watch button for any project, I can click it again to unwatch it. So the projects I don't want on my watch list are gone.

Add documentation:
- As a owner of a project, I can add paragraphs to my project, so that I can document the proccess.

Delete documentation:
- As a owner of a project, I can delete any documentation I've created.

Project title:
- As a owner of a project, I can give it a title, so that my project can make an impression with a large text.

Edit project title:
- As a owner of a project, I can edit the title, so that the project is up-to-date as my project take shape.

Project description:
- As a owner of a project, I can give it a description, so that people can read about my project.

Edit project description:
- As a owner of a project, I can edit the description, so that the project is up-to-date as mt project take shape.

Deployed link:
- As a owner of a project, I can add a deployed link, so that people can find me wherever I want to be seen, such as Artstation.

Edit deployed link:
- As a owner of a project, I can edit the deployed link, in case I change my mind about where I want to be be visisble.

HiDoc Features
===
Navigation bar "Navbar":
---
(screenshot image of navbar-demo)
- This component satisfies the "Navbar" user story.
- Users can navigate through "Browse", "Create project", "Watch list", "Sign out/in/up", "My projects".
- The navigation bar will collapse when the size isn't wide enough to fit the content. This is achieved by implementing the use of `Navbar.Toggle` and `Navbar.Collapse`.
- `Navbar.Toggle` makes up the 'hamburger' button.
- `Navbar.Collapse` wraps the items that should be hidden inside the 'hamburger' button.
- Location: `src > pages > auth`.

Sign-in page:
---
(screenshot image of signin-demo)
- This feature satisfies the "Sign-in" user story.
- useSetCurrentUser is a component that let HiDoc tell whoever is signed in.
- Errors catch invalid forms and return a message to the user.
- Axios make communication with the API. It can get data with valid credentials.
- Location: `src > pages > auth`.

Sign-up page:
---
(screenshot image of signup-demo)
- This feature satisfies the "Sign-up" user story.
- Errors catch invalid forms and return a message to the user.
- Axios make communication with the API. It can create a new user with valid credentials.
- Location: `src > pages > auth`.

Browse:
---
(screenshot image of browse-demo)
- This feature satisfies the "browse" user story.
- Wraps around the project component.
- Using AxiosReq to get all the projects on the API.
- Show: poster, title, owner, description, and date.
- Clicking the pink button takes the user to proejct detail.
- Location: `src > pages > projects`.

Browse detail:
---
- This feature satisfies the "browse detail" user story.
- Wraps around the project component.
- Show: poster, title, deployed link, owner, description, date, watch button, create documentation, and documentations.
(screenshot image of signedout-projectdetail-demo)
(screenshot image of signedin-owner-projectdetai-demo)
(screenshot image of signedin-projectdetai-demo)
- Location: `src > pages > projects`

Create project:
---
(screenshot image of create-demo)
- This feature satisfies the "create project" user story.
- AxiosReq communicate with the API, allowing the user to make changes to the API.
- The image input is manditory, the other fields are optional.
- An empty title will show a icon instead.
- An empty description will show "created by user" instead.
- Location: `src > pages > projects`.

Watch project:
---
(screenshot image of watchproject-demo)
- This feature satisfies the "watch project" user story.
- This feature reuse the Browse component, only showing projects the user is watching.
- If the user isn't watching any projects, a message appear, like the image above.

Sign out:
---
- This feature satisfies the "sign out" user story.
- The signout button will sign out the user.

My projects:
---
(screenshot of myprojects-demo)
- This feature satisfies the "my proejcts" user story.
- Axios fetch data from API comparing the art account ID, to render projects belonging to that user.
- Infinite scroll optimize project loading.
- Showing the username of the art account, and how many projects they've made.
- Location: `src > pages > art_accounts`.

Edit project:
---
(screenshot of editproject-demo)
- Follow the same model as create project module, but it get existing data using axios, depending on project ID, and overwrite existing data, instad of creating data.
- Location: `src > pages > projects`.

Not found:
---
(screenshot of notfound-demo)
- Location: `src > components`.
- The route dom will render this page if it fails to render any other URL-link.


Future features:
===
- Images as documentation.
- Edit documentation paragraph.
- Link to a project profile.
- Search bar.
- Reassign the ordering of documentations.
- Multiple deployed links.
- Hyperlink support for documentation.
- Edit hyperlink documentation.
- Watch artist alongside watch project.
- Blur poster, or documentation image.
- Unlisted project, preventing it from appearing on the Browse page, and restricting the Watch Project feature.
- Optional dark theme (colours are easier to read with dark surroundings).

Underdelivered features
---
- Include an image as a part of project documentation. There are traces of code with attempts to achieve these features, which remain undeleted so that they can be implemented as future features.


Appearance
===
Theme colour HEX:
#e35e8a

Small screen CSS:
@media only screen and (max-width: 600px) {}

Font:
Quicksand
Edu SA Beginner (unused)

The user interface will evolve with time, putting the documentation on the spotlight.


Wireframes
===
(screenshots of wireframes)


Technology Setup:
===

NPM
---
- In terminal (only if the root is empty):
`npx create-react-app - --use-npm`
- Why?
Creating a new setup upon an existing template or app will make the code hard to maintain and hard to make sense.
- If development is done with Gitpod, run this for every session, in the terminal:
`nvm install 16 use 16`

Bootstrap:
---
- React-Bootstrap (ver 4) is specifically designed for React. To install (ver 4), run in the terminal:
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
This setup will enable the navigation bar to render content depending on what button the user clicks.
- Inside App.js, add <Route> for each item that should be rendered. Include exact.

Font Awesome:
---
- HiDoc uses icons borrowed from Font Awesome.
- Installment of Font Awesome is a string inside `public > index.html`

Axios and API request:
---
- In the Heroku app for the API, there are two client origins with links to the front-end URL.
- Axios is used to link the frontend and backend. In terminal:
`npm install axios`

Infinite scroll:
---
- In terminal:
`npm install react-infinite-scroll-component`
- Infinite scroll optimize the communication with the API when loading content.


Validation:
===
This can also be found inside the validation.md file

Validated using https://jshint.com/ 
Ignored warnings:
- 'import' is only available in ES6 (use 'esversion: 6').
- 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
- 'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 'Unclosed regular expression. (inside return())
- 'Unrecoverable syntax error.

Checked files:
- ProjectsPage.js
- ProjectPage.js
- ProjectEditForm.js
- ProjectCreateForm.js
- Project.js
- DocumentationCreateForm.js
- Documentation.js
- SignUpForm.js
- SignInForm.js
- SearchArtists.js
- ArtistPage.js
- useRedirect.js
- useClickOutsideToggle.js
- CurrentUserContext.js
- AccountDataContext.js
- NotFound.js
- NavBar.js
- Avatar.js
- Asset.js

Validated using https://jigsaw.w3.org/css-validator/ 
Checked files:
- SignUpForm.module.css
- SignInForm.module.css
- ProjectsPage.module.css
- ProjectPage.module.css
- ProjectEdit.module.css
- ProjectCreate.module.css
- Project.module.css
- NotFound.module.css
- NavBar.module.css
- MoreDropdown.module.css
- DocumentationCreateForm.module.css
- Documentation.module.css
- Avatar.module.css
- Asset.module.css
- ArtistPage.module.css
- Artist.module.css


Manual testing:
===
This can also be found inside the manual testing.md file

Sign in/out redirect:
---
- If signed in, cannot access the sign-in page.
- If signed in, cannot access the sign-up page.
- If signed out, cannot access the create project page.

Sign in/up/out:
---
- If signed out, can sign up with a new artist account, if the form is valid.
- If the signup form is invalid, warning messages appear. (sign-up error message demonstration image)
- If signed out, can sign in with existing credentials, if the form is valid.
- If the sign-in form is invalid, warning messages appear. (sign-in error messages demonstration image)
- If signed in, clicking "sign out" will sign said user out.

404:
---
- If a link to a non-existing project, the message "this project does not exist" will appear.
- If inside an invalid page, a 404 message appears (screenshot of /sauce demonstration).

Navigation bar options:
---
- If signed out, the navigation bar options are: "Browse", "Sign in", and "Sign up".
- If signed in, the navigation bar options are: "Browse", "Create project", "Watch List", "Sign out", and "My projects".

CRUD project:
- The Browse page can retrieve all projects on HiDoc.
- Can create a project, where the image is mandatory, and the "Title", "Description", and "Deployed link" allow empty input.
- A warning message occurs if the user doesn't provide an image.
- A warning message occurs if the user applies an invalid URL in the Deplyed link.
- If the owner of any project, an option icon appears in the top right corner.
- The owner of a project can edit their project, changing the image, title, description and deployed link.
- The owner of a project can delete the project.

Watch project
---
- If not owner, the option to watch is available.
- If clicking "Watch project", the appearance of that button changes to "Unwatch project".
- If clicking "Unwatch project", the appearance of that button changes to "Watch project".
- If not watching any projects, the "watch list" view renders a message: "Projects you're watching will appear here".
- If watching any projects, the "watch list" view renders all projects where said user clicked "watch project".

My projects
---
- My projects page renders all projects belonging to the art account.

Documentation
---
- If the owner of any project, can write text and add documentation.
- If the owner of any project, can delete previously added documentation.
- If not the owner, neither the create documentation nor delete documentation button are visible.


Deployment
===
Tangle in development (troubleshooting):
---
- Documentation of encountered problems and how they were solved:
- During development in Gitpod, it is necessary to manually install npm for each session. Run in terminal:
`nvm install 16 use 16`

- when you run `npm start`, a port will be used to host the app. During development for HiDoc, that port was "3000".
- Should a port break, and cannot be stopped with the usual ctrl+C `keyboard command, run this in the terminal:
`lsof -i :3000`
- Find the PID numbers for port 3000
- In terminal:
`kill -9 (PID number)`

- The default setup inside `index.js` that came with the next instalment didn't render links properly.
- (Image of old setup that doesn't work)
- The code inside `index.js` was borrowed from Moments by Code Institute, a setup that works.


Run:
---
- In terminal:
`npm start`
You may need to change the directory


Agile development:
===
This section covers the tactical approach taken before and during development.

Waterfall:
HiDoc is a waterfall project until these features are complete:
- sign up
- sign in
- sign out
- create project
- edit project
- delete project
- browse projects
- watch project
- unwatch project
- browse watching projects

One these features are complete, additional features are agile, meaning HiDoc can afford compromises of additional features before February 13:th.

Referenced by Code Institute's proejct Moments:
---
HiDoc is a project following criteria with expectations set by Code Institute. Code Institute did provide a training project that satisfied all the expectations. To secure the highest chance of passing the expectations, this project follows a similar model to that training project.
The HiDoc equivalents, however, are not copies masked behind a different name. For instance, the comments from the Code Institute Training project are created by the read-only user, whereas the documentation is created by the owner. The watch and follow models from the training are separate features from the training project, whereas HiDoc merges them into one. There are reused models borrowed from the training proejct, but no code have been copy-pasted.

Better underpromising than delivering an unstable product:
---
Due to burnout, there are some compromises. The source code have traces of the following features:
- find other artists
- search projects/ artists
- edit documentation
- add image to documentation
These features are not available on the first release. But the code remain in the source code, so that they can be resumed as future features.

Abounded features
---
There are some features abounded, deemed irrelevant for what HiDoc is trying to achieve. During early development, they seemed like relevant featueres. These are the features:
- the ability to watch an artist,
- the ability to search artists,
- a watch project counter,
- a watch artist counter,
- commenting on a project.


Unsolved
===
Double create documentation:
---
- Both Project.js and ProjectPage.js have the same create documentation code snippet. The snippet inside Projects.js makes sure the created documentation appears before refresh, and the block inside ProjectPage.js makes sure the documentation appears after refresh/ revisit. This does not affect the functionality, but it can cause confusion and accidental bugs during future maintenance/ updates.

- The add documentation Submit button is supposed to have a white background, instead of a light blue, when the paragraph box is empty. This unsolved styling issue does not affect the functionality of the documentation feature.


Deployment
===
- In package.json, the following line has been added inside the "scripts" section:
`"Heroku-prebuild": "npm install -g serve"`
- The Procfile was added with the following content:
`web: serve -s build`
`"engines": {"node": "16.13.0"}`

Credits:
===
Referenced/ inspired by Code Institute's project Moments.
Icons: Font Awesome
Logo and some icons are designed by Alma Isaksson.
Developed by Alma Isaksson.
Example projects for demostration purposes are painted by Alma Isaksson.
Theme Font: Edu SA Beginner https://fonts.google.com/specimen/Edu+SA+Beginner/about?classification=Handwriting
Paragraph Font: Quicksand https://fonts.google.com/specimen/Quicksand/about?query=Quicksand&stroke=Sans+Serif
The "Asset" asset is borrowed from Code Institute's project Moments
