SignUp problem:
---
Submiting in the signup page wouldn't do anything, nor give response to the end uesr.
Theory: The API wasn't properly connected to the front-end.
Cause: Backend use registration "password1" "password2", and frontend SignUpForm use "password" "password_confirm".
Solution: Change the SignUpForm password fields to 1 and 2. 
How: Firefox developer tool > network > click an instance, reveal the expected name.

Sign in error:
---
The strangest error was that of when you sign in and get a "error not defined" error. You're not signed in.
Cause: unknown.
Solution: Run on Chrome. HiDoc is primarily tested on Mozilla Firefox. It's a mystery how, but when attempting to sign in via Google Chrome, the sign in was successful. After that sign in, it became possible to sign in on all browsers.