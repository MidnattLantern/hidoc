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