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
reason: typo at `EFAULT_RENDERER_CLASSES`