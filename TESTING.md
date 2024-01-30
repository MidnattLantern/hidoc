SignUp problem:
---
Submiting in the signup page wouldn't do anything, nor give response to the end uesr.
Theory: The API wasn't properly connected to the front-end.
Cause: Backend use registration "password1" "password2", and frontend SignUpForm use "password" "password_confirm".
Solution: Change the SignUpForm password fields to 1 and 2. 
How: Firefox developer tool > network > click an instance, reveal the expected name.