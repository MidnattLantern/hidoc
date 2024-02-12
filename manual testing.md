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