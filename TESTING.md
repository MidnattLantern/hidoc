The HiDoc project follow a very similar model to Code Institute's Moments project. This is a tactical agile approach. To prevent risk of plagarism and improve in-depth-understanding, HiDoc use different naming convention, which force development to be more alert about what's happening in the Moments project. Because of this, problems caused due to misuse in naming was a common roadblock during development. This is a documentation for some roadblocks. Not all but most of them are namin related.

SignUp problem:
---
Submiting in the signup page wouldn't do anything, nor give response to the end uesr.
Theory: The API wasn't properly connected to the front-end.
Cause: Backend use registration "password1" "password2", and frontend SignUpForm use "password" "password_confirm".
Solution: Change the SignUpForm password fields to 1 and 2. 
How: Firefox developer tool > network > click an instance, reveal the expected name.

Sign in error:
---
"errors is undefined" in Firefox, "TypeError: Cannot read properties of undefined (reading 'username')" in Chrome.
Theory: API isn't properly set up with the front end.
Cause: typo at DEFAULT_RENDERER_CLASSES in backend, and <CurrentUserProvided> in index.js didn't wrap around <App />
How: 

Weird API UI:
---
The UI have a weird look in Heoku deployment.
reason: typo at `DEFAULT_RENDERER_CLASSES`

undefined account:
---
Clicking my page return an undefined url. The question is, how does currentUser?. get its data?
Theory: HiDoc follow a different naming convention, using art account instead of profile. Causing conflict.
Cause: Backend issue. Serializsers.py inside drf_api were written as "profile_id" and "profile.id". HiDoc is setup to expect artaccount_id.
How: rename backend setup.

"use" when naming in hooks
---
Anything with hooks should be named "use", otherwise React will reject it. 
Incorrect: camelCase
Correct: useCamelCase

Duplicate text fields in Create Project
---
The create project follow a similar model to CI Moments. This line of code prevent the form field from duplicate:
<Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">

Creating project publish empty values
---
Submitting a form to create a project return empty values in the API.
Theory: The names for submittion didn't use the same as for the API.
Cause: The names for submittion didn't user the same as for the API.
- Used names (causeing failure): "title", "description", "poster",
- API names (to fix the issue): "project_title", "project_description", "feature_poster".
How: ProjectCreateForm.js need to match the same names from the API.

Failed to load projects page
---
The API for HiDoc don't use generic models, so it operates differently from the Moments tutorial. This issue was caused because the incorrect way expect a generic model.
The array of HiDoc API is a simple array, making the user of `.results` inapropriate.
- correct: `projects.length ?`
- incorrect: `projects.results.length ?`

Undefined anything from API
---
The first encounter with "undefined" data was happening on development during watch project. Instead of facing the problem imediatelly, the other componentes were coded to see if there's a pattern to this problem.
For popular artists: TypeErrpr: `populatArtists.restults` is undefined.
Theory: Because the API don't use generics, HiDoc shouldn't reference the code for the Moments tutorial.