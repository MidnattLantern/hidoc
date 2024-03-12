HiDoc
===
HiDoc is a platform designed for artists and illustrators to share and document their creative process. Unlike other art-sharing platforms such as ArtStation, DeviantArt, X, or Pinterest, HiDoc is optimized for documenting the creative process rather than just the finished product. The current version of the platform allows artists to document their artwork by writing paragraphs that record the date of the documentation. The poster can be updated whenever they want. They can also leave links to any site where they want to be seen, using the deployed link feature. 

HiDoc is designed to complement existing artist-sharing platforms with niche features that are appropriate for documenting the creative process. Therefore, HiDoc does not have a like or follow feature since that does not contribute to the value of documentation. It does, however, have a "watch project" feature that allows users to save and keep track of interesting projects.

There are many reasons why an artist might want to document their art projects, mainly to save credibility. The ambition of the HiDoc project is that artists can link to a HiDoc project page in their description, reducing plagiarism, where AI-generated artwork is discredited since the process of AI-generated art cannot be documented. With HiDoc, human artists with a certain artistic direction are not accused of using AI since that can be documented.

HiDoc is built upon React/ React Bootstrap, connected to a Django API through Axios.

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
- As a signed-in user, I can access my projects on a "My Projects" page.

Create a project:
- As a signed-in user, I can click a button that lets me create a new project so that I can start documenting that project.

Edit projects:
- As a signed-in user, I can click a button for any of my projects, that lets me change its content.

Delete projects:
- As a signed-in user, I can click a button for any of my projects, that lets me delete it and all its content.

Browse:
- As a user, I can browse all public projects. So that I can find inspiration.

Watch list: As a signed-in user, I can find a list of all projects I've clicked Watch so that I can save all the projects I - have an interest in.

Browse detail:
- As a user, I can see the project in more detail, so that I can access the watch button and the documentation.

Watch button:
- As a signed-in user, looking at any project, I can click a Watch button that will add that project to my Watch list. So that I can save all the projects I have an interest in.

Unwatch button:
- As a signed-in user, who has clicked the watch button for any project, I can click it again to unwatch it. So the projects I don't want on my watch list are gone.

Add documentation:
- As an owner of a project, I can add paragraphs to my project, so that I can document the process.

Delete documentation:
- As an owner of a project, I can delete any documentation I've created.

Project title:
- As an owner of a project, I can give it a title, so that my project can make an impression with a large text.

Edit project title:
- As an owner of a project, I can edit the title, so that the project is up-to-date as my project takes shape.

Project description:
- As an owner of a project, I can give it a description, so that people can read about my project.

Edit project description:
- As an owner of a project, I can edit the description, so that the project is up-to-date as mt project takes shape.

Deployed link:
- As an owner of a project, I can add a deployed link, so that people can find me wherever I want to be seen, such as Artstation.

Edit deployed link:
- As an owner of a project, I can edit the deployed link, in case I change my mind about where I want to be visible.

HiDoc Features
===
Navigation bar "Navbar":
---
![navbar-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/navbar-demo.png)
- This component satisfies the "Navbar" user story.
- Users can navigate through "Browse", "Create project", "Watch list", "Sign out/in/up", and "My projects".
- The navigation bar will collapse when the size isn't wide enough to fit the content. This is achieved by implementing the use of `Navbar.Toggle` and `Navbar.Collapse`.
- `Navbar.Toggle` makes up the 'hamburger' button.
- `Navbar.Collapse` wraps the items that should be hidden inside the 'hamburger' button.
- Location: `src > pages > auth`.

Sign-in page:
---
![signin-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/signin-demo.png)
- This feature satisfies the "Sign-in" user story.
- useSetCurrentUser is a component that lets HiDoc tell whoever is signed in.
- Errors catch invalid forms and return a message to the user.
- Axios make communication with the API. It can get data with valid credentials.
- Location: `src > pages > auth`.

Sign-up page:
---
![signup-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/signup-demo.png)
- This feature satisfies the "Sign-up" user story.
- Errors catch invalid forms and return a message to the user.
- Axios make communication with the API. It can create a new user with valid credentials.
- Location: `src > pages > auth`.

Browse:
---
![browse-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/browse-demo.png)
- This feature satisfies the "browse" user story.
- Wraps around the project component.
- Using AxiosReq to get all the projects on the API.
- Show: poster, title, owner, description, and date.
- Clicking the pink button takes the user to the project detail.
- Location: `src > pages > projects`.

Browse detail:
---
- This feature satisfies the "browse detail" user story.
- Wraps around the project component.
- Show: poster, title, deployed link, owner, description, date, watch button, create documentation, and documentation.
![signed-out-project-detail-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/browse-demo.png)
![signed-in-owner-projectdetail-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/signedin-owner-projectdetai-demo.png)
![signed-in-projectdetail-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/signedin-projectdetai-demo.png)
- Location: `src > pages > projects`

Create project:
---
![create-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/create-demo.png)
- This feature satisfies the "create project" user story.
- AxiosReq communicate with the API, allowing the user to make changes to the API.
- The image input is mandatory, the other fields are optional.
- An empty title will show an icon instead.
- An empty description will show "created by user" instead.
- Location: `src > pages > projects`.

Watch project:
---
![watchproject-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/watchproject-demo.png)
- This feature satisfies the "watch project" user story.
- This feature reuses the Browse component, only showing projects the user is watching.
- If the user isn't watching any projects, a message appears, like the image above.

Sign out:
---
- This feature satisfies the "sign out" user story.
- The signout button will sign out the user.

My projects:
---
![projects-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/myprojects-demo.png)
- This feature satisfies the "my projects" user story.
- Axios fetch data from API comparing the art account ID, to render projects belonging to that user.
- Infinite scroll optimize project loading.
- Showing the username of the art account, and how many projects they've made.
- Location: `src > pages > art_accounts`.

Edit project:
---
![editproject-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/editproject-demo.png)
- Follow the same model as creating the project module, but it gets existing data using Axios, depending on project ID, and overwrites existing data, instead of creating data.
- Location: `src > pages > projects`.

Not found:
---
![notfound-demo](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/demonstration/notfound-demo.png)
- Location: `src > components`.
- The route dom will render this page if it fails to render any other URL link.


Future features:
===
- Images as documentation.
- Edit documentation paragraph.
- Link to a project profile.
- Search bar.
- Reassign the ordering of documentation.
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

The user interface will evolve with time, putting the documentation in the spotlight.


Wireframes
===
![HiDoc-wireframe1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/Wireframes/HiDoc-wireframe1.png)
![HiDoc-wireframe2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/Wireframes/HiDoc-wireframe2.png)
![HiDoc-wireframe3](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/Wireframes/HiDoc-wireframe3.png)
- These images attempt to describe as much as possible about the goals of HiDoc.
- These wireframes are guiding directors.


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
- Infinite scroll optimizes the communication with the API when loading content.


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
This can also be found inside the `manual testing.md` file with images

Sign in/out redirect:
---
- If signed in, cannot access the sign-in page:
If the navigation bar has the option "My Projects", the user is signed in. At this stage, by adding `/sign-in` in the URL, the user will be prompted back to the main page.

- If signed in, cannot access the sign-up page:
This can be tested with the same method as for sign-in, but adding `/sign-up` instead.

- If signed out, cannot access the create project page:
If the navigation bar has the option "Sign up", the user is signed out. At this stage, by adding `/projects/create` in the URL, the user will be prompted back to the main page.


Sign in/up/out:
---
- If signed out, can sign up with a new artist account, if the form is valid:
This can be tested by being signed out and either clicking "sign up" in the navigation bar or adding `/sign-up` in the URL. Then, make a valid submission.

- If the signup form is invalid, warning messages appear:

- If signed out, can sign in with existing credentials, if the form is valid.
This can be tested with the same method as for sign-up, but clicking "sign in" in the navigation bar or adding `/sign-in` to the URL, then using existing authentication instead of making up one.

- If the sign-in form is invalid, warning messages appear

- If signed in, clicking "sign out" will sign said user out:
This can be tested by signing in and then clicking "sign out" at the navigation bar.


404:
---
- If inside an invalid page, a 404 message appears:
This can be tested by adding any nonsensical text to the URL, such as `/sauce`.

Navigation bar options:
---
- If signed out, the navigation bar options are: "Browse", "Sign in", and "Sign up":
This can be tested by visiting HiDoc for the first time. If you're a regular, make sure to click "sign out" in the navigation bar.

- If signed in, the navigation bar options are: "Browse", "Create project", "Watch List", "Sign out", and "My projects":
This can be tested by signing in. If you're a regular, chances are these options appear upon visitation.

- If scrolling down, the navigation bar is fixed at the top of the page.


Browsing:
---
- All projects on the API are displayed on the browse page.
- Entering text in the search bar will filter all projects according to the text input:
By default, all projects stored on the API will appear.
There's a test project named "bunny". By typing "bunny" in the search bar, there will be a project of a pink bunny with wings, and nothing else (unless another user in the future has made a project with "bunny" in their project name).


CRUD project:
---
- The Browse page can retrieve all projects on HiDoc:
Upon visiting, the main page will display the text "loading projects", after a couple of seconds, a list of projects will appear in an infinite scroll.

- Can create a project, where the image is mandatory, and the "Title", "Description", and "Deployed link" allow empty input:
By signing in, the create project is accessible in the navigation bar.

- A warning message occurs if the user doesn't provide an image:
Leaving the image input empty, there will be an error message.

- A warning message occurs if the user applies an invalid URL in the Deplyed link:
Strings such as "invalid link" will make the message appear.

- If the owner of any project, an option icon appears in the top right corner:
To easily find projects you own, click "my projects" in the navigation bar. The projects have a special icon in the top right corner, clicking it displays an edit and a delete icon.

- The owner of a project can edit their project, changing the image, title, description and deployed link:
If you own the project, a button for editing a project is displayed. For instance, the deployed link can send the user to Youtube.com before the edit, and Reddit.com after the edit.

- Unauthenticated users are prompted to the home page if 'trying' to edit another user's project:
If signed out, and added `/projects/51/edit` to the URL, the bunny example project, the user will be prompted to the home page. This page should only be accessible to the owner of that project.

- The owner of a project can delete the project:
For a project you own, clicking "delete" will delete the project.

Watch project
---
- If not owner, the option to watch is available:
The bunny example project displays a "watch project" button from any account that isn't the owner.

- If clicking "Watch project", the appearance of that button changes to "Unwatch project":
The appearance changes when clicking the button.

- If clicking "Unwatch project", the appearance of that button changes to "Watch project".
The appearance changes when clicking the button.

- If not watching any projects, the "watch list" view renders a message: "Projects you're watching will appear here".
This can be tested by making sure you're not watching any projects.

- If watching any projects, the "watch list" view renders all projects where said user clicked "watch project".
Comparing the "browse" page to the "watch list" page, notice that only projects you're watching will appear in the watch list.

My projects
---
- My projects page renders all projects belonging to the art account.
Comparing the "browse" page to the "my projects" page, notice that only projects you own will appear on the page.


Documentation
---
- If the owner of any project, can write text and add documentation.
This was tested by signing in with HiDoc-testuser1's account and checking project ID 51. The add documentation option is visible.

- If the owner of any project, can delete previously added documentation.
This was tested by signing in with HiDoc-testuser1's account and checking project ID 51. The delete documentation option is visible.

- If not the owner, neither the create documentation nor delete documentation button are visible.
This was tested by signing out and revisiting project ID 51. Neither the add or delete option is visible.



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

Once these features are complete, additional features are agile, meaning HiDoc can afford compromises of additional features before February 13:th.

Referenced by Code Institute's project Moments:
---
HiDoc is a project following criteria with expectations set by Code Institute. Code Institute did provide a training project that satisfied all the expectations. To secure the highest chance of passing the expectations, this project follows a similar model to that training project.
The HiDoc equivalents, however, are not copies masked behind a different name. For instance, the comments from the Code Institute Training project are created by the read-only user, whereas the documentation is created by the owner. The watch and follow models from the training are separate features from the training project, whereas HiDoc merges them into one. There are reused models borrowed from the training project, but no code has been copy-pasted.

Compromises:
---
Due to burnout, there are some compromises. The source code has traces of the following features:
- find other artists
- Search projects/ artists
- edit documentation
- Add image to documentation
These features are not available on the first release. But the code remains in the source code so that they can be resumed as future features.

Abounded features
---
There are some features abounded, deemed irrelevant to what HiDoc is trying to achieve. During early development, they seemed like relevant features. These are the features:
- the ability to watch an artist,
- the ability to search artists,
- a watch project counter,
- a watch artist counter,
- commenting on a project.


Resumed features/ completion
===
- Search-bar

Unsolved
===
Double create documentation:
---
- Both Project.js and ProjectPage.js have the same create documentation code snippet. The snippet inside Projects.js makes sure the created documentation appears before refresh, and the block inside ProjectPage.js makes sure the documentation appears after refresh/ revisit. This does not affect the functionality, but it can cause confusion and accidental bugs during future maintenance/ updates.

- The add documentation Submit button is supposed to have a white background, instead of a light blue, when the paragraph box is empty. This unsolved styling issue does not affect the functionality of the documentation feature.


Deployment
===

setup
---
- In package.json, the following line has been added inside the "scripts" section:
`"Heroku-prebuild": "npm install -g serve"`
- The Procfile was added with the following content:
`web: serve -s build`
`"engines": {"node": "16.13.0"}`
- Make a final Git repository push before moving on. In the terminal, run:
1. `git add .`
2. `git commit -m "final deployment"`
3. `git push`

Heroku
---
- An account is required, this is the sign-up link:
https://signup.heroku.com/login

- From the page:
https://dashboard.heroku.com/apps

- At the top right, click "Create new app":
![front_heroku_step_1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/front_heroku_deployment/front_heroku_step_1.png)

- Give the app a name, in HiDoc's case, the name "HiDoc" was given:
![front_heroku_step_2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/front_heroku_deployment/front_heroku_step_2.png)

- Unlike the API, the front-end don't need any configuration setup. Jumping straight to the deployment section:
![front_end_step_3](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/front_heroku_deployment/front_heroku_step_3.png)

- Pick Github among the options, then search for the name of the repository, in HiDoc's case, "hidoc", then pick "connect" for the front-end repository "HiDoc":
![front_end_step_4](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/front_heroku_deployment/front_heroku_step_4.png)

- At the bottom of the page, click "Deploy branch":
![front_end_step_5](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/front_heroku_deployment/front_heroku_step_5.png)

- When finished, click "open app". This is the link to the front-end HiDoc:
https://hidoc-144446eddf75.herokuapp.com


Credits:
===
Referenced/ inspired by Code Institute's project Moments.
Icons: Font Awesome
The logo and some icons are designed by Alma Isaksson.
Developed by Alma Isaksson.
Example projects for demonstration purposes are painted by Alma Isaksson.
Theme Font: Edu SA Beginner https://fonts.google.com/specimen/Edu+SA+Beginner/about?classification=Handwriting
Paragraph Font: Quicksand https://fonts.google.com/specimen/Quicksand/about?query=Quicksand&stroke=Sans+Serif
The "Asset" asset is borrowed from Code Institute's project Moments
Grammar and spell check using Grammarly.


Project complementary
===
The first "prototype" verson had to be complemented to meet certain requirements, these features were added:
- Search feature