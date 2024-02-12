The HiDoc project follows a very similar model to Code Institute's Moments project. This is a tactical agile approach. To prevent the risk of plagiarism and improve in-depth understanding, HiDoc uses different naming conventions, which force development to be more alert about what's happening in the Moments project. Because of this, problems caused due to misuse of naming were a common roadblock during development. This is documentation for some roadblocks. Not all but most of them are named related.

SignUp problem:
---
Submitting on the signup page wouldn't do anything, nor give a response to the end users.
Theory: The API wasn't properly connected to the front end.
Cause: The backend use registration "password1" "password2", and the frontend SignUpForm use "password" "password_confirm".
Solution: Change the SignUpForm password fields to 1 and 2. 
How: Firefox developer tool > network > click an instance, reveal the expected name.

Sign in error:
---
"errors is undefined" in Firefox, "TypeError: Cannot read properties of undefined (reading 'username')" in Chrome.
Theory: API isn't properly set up with the front end.
Cause: typo at DEFAULT_RENDERER_CLASSES in backend, and <CurrentUserProvided> in index.js didn't wrap around <App />

Weird API UI:
---
The UI has a weird look in the Heroku deployment.
reason: typo at `DEFAULT_RENDERER_CLASSES`

undefined account:
---
Clicking my page returns an undefined URL. The question is, how does currentUser?. get its data?
Theory: HiDoc follow a different naming convention, using an art account instead of a profile. Causing conflict.
Cause: Backend issue. Serializsers.py inside drf_api were written as "profile_id" and "profile.id". HiDoc is set up to expect artaccount_id.
Solution: rename the backend setup.

"use" when naming in hooks
---
Anything with hooks should be named "use", otherwise React will reject it. 
Incorrect: camelCase
Correct: useCamelCase

Duplicate text fields in Create Project
---
The Create project follows a similar model to CI Moments. This line of code prevents the form field from duplicating:
<Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">

Creating a project to publish empty values
---
Submitting a form to create a project returns empty values in the API.
Theory: The names for submission didn't use the same as for the API.
Cause: The names for submission didn't use the same as for the API.
- Used names (causing failure): "title", "description", "poster",
- API names (to fix the issue): "project_title", "project_description", "feature_poster".
How: ProjectCreateForm.js need to match the same names from the API.

Failed to load projects page
---
The API for HiDoc don't use generic models, so it operates differently from the Moments tutorial. This issue was caused by the incorrect way to expect a generic model.
The array of HiDoc API is simple, making the user of `.results` inappropriate.
- correct: `projects.length ?`
- incorrect: `projects.results.length ?`

Undefined anything from API
---
The first encounter with "undefined" data was happening on development during the watch project. Instead of facing the problem immediately, the other components were coded to see if there was a pattern to this problem.
For popular artists: TypeErrpr: `populatArtists.restults` is undefined.
Theory: Because the API don't use generics, HiDoc shouldn't reference the code for the Moments tutorial.

Unable to watch the project
---
Attempting to watch any project returns a 400 error.
Note cause: project in `const {data} = await axiosRes.post('/watch-projects/', {project:id});` don't seem to be correct?
Theory: Because this API doesn't use generic views, this use case isn't appropriate.
Note: the API does update when you click watch the first time, and then the page goes blank.
Note: "project" in `const {data} = await axiosRes.post('/watch-projects/', {project:id});` is correct. "project" makes the API update the data in a way that seems to make sense.
Note: At this point, it seems like the bug was solved. Previously, the cause was that the code was written as `{post:id}` instead of `{project:id}`, but the consensus isn't clear.
Theory: the watch_proj_id is retrieved as "null"
Note: when it worked, the `prevProjects.results.map` was uncommented. does ".results" play a role? Without ".results", the site crashes, however, the /watch-projects/ in the API don't seem to make sense, as the id and project index don't match for some reason. With ".results" these two will have the same index.

Failed to filter projects
---
The text box that lets you filter by keywords should only return projects with any content having that filter criteria.
Theory from tutor: the field cannot filter by text input because the API doesn't have filters.
IMPORTANT NOTE: The API originally used non-generic views. After a revisit to the Moments DRF-API tutorial, I discovered that the cause why there are no filter options, was because the model was non-generic. After switching to the generic view, the filter appeared. I don't know if it is possible to add filter options using non-generic views, but regardless, this is one reason to use generic views.
- Solution: Transition to generic views in the backend API.
- Why? I don't know if it's possible to use filters without generic views, but by the way, the training model is structured, it is required to use generic views, as it is required to get filters to work.

Transitioning to generic models
---
This is related to the "Failed to load projects page" error. Now that the models in the backend were transited to generic models, the ".results" may be necessary. However, putting them back would crash the site.
Solution: Not every .results will have "projects" and "length" as pears. One had "next", another had "map". At this point, the ".results" are back in ProjectPage.js and are compatible with backend generics.

blank profile page
---
`const [account] = pageAccount.results;` from ArtistPage.js causes a blank page, with the error in the terminal "TypeError: pageAccount is undefined".
Solution: Instead of using `const [account] = pageAccount.results;` HiDoc use: `const account = pageAccount && pageAccount.results && pageAccount.results.length > 0 ? pageAccount.results[0] : null;`
This solution is more complicated than my comprehension. I didn't write this line, credits go to a tutor: Jason. This line will check whether `pageAccount` has been defined or not, and if it has a `results` section. Then it will render content.

Addressing CRUD issues
---
Whenever HiDoc couldn't CRUD properly, the first question to be asked: is it possible to CRUD from the API? The API may be similar to its training data, this is because the CRUD didn't function upon trying to figure things out on my own, so I fell back to the training data.

Not found always available
---
The page not found image would appear on all the sites.
cause: App.js had multiple <Switch> elements, confusing with the app.
solution: wrap all the <Route(s)> to one single <Switch>