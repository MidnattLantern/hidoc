HiDoc
===
HiDoc is a platform designed for artists and illustrators to share and document their creative process. Unlike other art-sharing platforms such as ArtStation, DeviantArt, X, or Pinterest, HiDoc is optimized for documenting the creative process rather than just the finished product. The current versioin of the platform allows artists to document their artwork by writing paragraphs that record the date of documentation. The  poster can be updated whenever they want. They can also leave links to any site where they want to be seen, using the deployed link feature. 

HiDoc is designed to complement existing artist sharing platforms with niche features that are appropriate for documenting the creative process. Therefore, HiDoc does not have a like or follow feature since that does not contribute to the value of documentation. It does however, have a "watch project" feature that allows users to save and keep track of interesting projects.

There are many reasons why an artist might want to document their art projects, mainly to save credibility. The ambition with the HiDoc project is that artists can link to a HiDoc project page in their description, reducing plagiarism, where AI-generated artwork is discredited since the process of AI-generated art cannot be documented. With HiDoc, human artists with a certain artistic direction are not accused of using AI since that can be documented.

More features will come in the future, such as documenting images alongside paragraphs.

Deployed link: https://hidoc-144446eddf75.herokuapp.com/

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


HiDoc is built upon React/ React Bootstrap.

Theme colour HEX: #e35e8a

small screen CSS:
@media only screen and (max-width: 600px) {}

Setup:
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
...


Components:
===
Most JavaScript components can be found inside `src > components`, exceptions are documented later,
Every corresponding CSS component can be found inside `src > styles`, 
These details are important if the `.js` needs to be relocated. In that case, the directory path needs to be edited inside `apps.py`.


Agile development:
===
This section covers the tactical approach taken before and during development.

The user stories list priority features with a number. The higher the number, the less important those features are. HiDoc uses an agile approach, meaning the less important user stories were only developed after the current priority was polished to a standard sufficient to be deployed.

HiDoc is a project following criteria with expectations set by Code Institute. Code Institute did provide a training project that satisfied all the expectations. To secure the highest chance of passing the expectations, this project follows a similar model to that training project. These are the features on a table from the Code Institutes training project, as well as hot HiDoc remix features:
- CI Training project - HiDoc
- post - project
- like - watch
- comment - documentation
- follow - watch list
The HiDoc equivalents, however, are not copies masked behind a different name. For instance, the comments from the Code Institute Training project are created by the read-only user, whereas the documentation is created by the owner. The watch and follow models from the training are separate features from the training project, whereas HiDoc merges them into one.

Better underpromising than an unstable product
---
There is no recorded evidence, but at a point during development, HiDoc's functionality was all set. There was a search bar that would filter the Browse page according to its text input. There was a watching projects section that would filter according to who was signed in and what projects they were watching. There was a search artist that would reveal a list of all the artists on HiDoc, and the "my page" would list all the projects of that artist.

I regret to document this, but I had to cut out of these valuable features.

These features are not available on the first release. With these named features, you couldn't sign up, create a new project or delete a project. During the attempt to recover the CRUD functionality, the filtering system crashed. I did all I could to recover both the CRUD functionality and the filtering options before the first release (13:th February), however, neither I, nor my mentor, nor my very patient tutors were able to recover them both. After severe panic attacks and hopeless evenings, I, unfortunately, had to take the agile approach to hide the filter features on the front end. The code and attempts for the filtering options are still in the source code so that they can be implemented as future features.

The "watch project" feature remains "watch project" in the source code, but has temporarily been renamed "like project" in the UI to make sense with the current context.

As of documenting this, there are five days left. I need to cut out features so that I can polish the user interface and clean up the code.

Artistic therapy as agile development
---
As I'm documenting this, I've gone through enough stress and many panic attacks throughout the development of HiDoc, and at this point, I'm drained. I can't do much more back and logic, my hands are shaking and my head is hot. At the bottom of the abyss, I remembered what I enjoyed the most throughout my journey in the Full Stack Course: CSS styling. There are five days left until my deadline. Instead of recovering the features that require filtering, I'm spending my energy on the visual presentation. HiDoc didn't have much visuals going on before this point, but that lack became my therapy for the moment.

Abounded features
---
There are some unused features left in the code. These features during development were deemed unnecessary, or unprioritized. This was an agile approach, to not delete them in case they would be of value in the future. Some of those features are:
- the ability to watch an artist,
- the ability to search artists,
- a watch project counter,
- a watch artist counter,
- commenting on a project.

Underdelivered features
---
These features couldn't be delivered due to incompetence:
- include an image as a part of project documentation.
There are traces of code with attempts to achieve these features, which remain undeleted so that they can be implemented as future features when I've had more time to figure things out.



Features
===

Project create and edit form
---
Spare the naming anxiety:
- When an artist account creates a new project, they have four options: upload an image ("feature poster"), give the project a title, give the project a description, and a hyperlink to any website, such as Artstation where they've also uploaded the project.
- The feature poster is mandatory, an error message will appear if they refuse to publish one, but the other fields are optional. For many artists/ illustrators, making up a name or a description for their project can be a source of anxiety, so HiDoc doesn't expect them to provide that right away.
- Warning messages are present on all fields, which makes sense for the Deplyed Link that will reject an invalid URL. But for Title and description, they don't have any known uses but they do provide merits for potential unknown bugs.

Documentation
---
- The owner of a project can add paragraphs, write about their project and add content at any time.



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
Heavy references from other projects are commented
Reference: Code Institute
Icons: Font Awesome
Theme Font: Edu SA Beginner https://fonts.google.com/specimen/Edu+SA+Beginner/about?classification=Handwriting
Paragraph Font: Quicksand https://fonts.google.com/specimen/Quicksand/about?query=Quicksand&stroke=Sans+Serif
The "Asset" asset is borrowed from Code Institute's project Moments