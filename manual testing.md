Sign in/out redirect:
---
- If signed in, cannot access the sign in page.
- If signed in, cannot access the sign up page.
- If signed out, cannot access the create project page.

Sign in/up/out:
---
- If signed out, can sign up with a new artist account, if the form is valid.
- If signup form is invalid, warning messages appear. (sign-up error message demostration image)
- If signed out, can sign in with existing credentials, if the form is vaid.
- If signin form is invalid, warning messages appear. (sign-in error messages demostration image)
- If signed in, clicking "sign out" will sign said user out.

404:
---
- If accessed a link to a non-existing project, the message "this project does not exist" will appear.
- If inside an invalid page, a 404 message appear (screenshot of /sauce demostration).

Navigation bar options:
---
- If signed out, the navigation bar options are: "Browse", "Sign in", and "Sign up".
- If signed in, the navigation bar options are: "Browse", "Create project", "Watch List", "Sign out", "My projects".

CRUD project:
- The Browse page can retrieve all proejcts on HiDoc.
- Can create a project, where image is manditory, and the "Title", "Description", and "Deployed link" allow empty input.
- A warning message occur if the user don't provide an image.
- A warning message occur if the user apply an invalid url in Deplyed link.
- If owner for any project , an option icon appear on the top right corner.
- Owner of a project can edit their project, changeing the image, title, description and deployed link.
- Owner of a proejct can delete their project.

Watch project
---
- If not owner, the option to watch is available.
- If clicking "Watch project", the appearance of that button change to "Unwatch project".
- If clicking "Unwatch project", the appearence of that button change to "Watch project".
- If not watching any projects, "watch list" view render a message: "Projects you're watching will appear here".
- If watching any projects, "watch list" view render all projects where said user clicked "watch project".

My projects
---
- My projects page render all projects belonging to the the art account.

Documentation
---
- If owner of any project, can write text and add documentation.
- If owner of any project, can delete previously added documentations.
- If not owner, neither the create documentation or delete documentation button are visible.