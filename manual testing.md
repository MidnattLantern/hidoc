new manual testing front

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
Missing the second password field:
![invalid-signup-1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/invalid-signup-1.png)
Entering "123" and "456" in the password fields:
![invalid-signup-2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/invalid-signup-2.png)

- If signed out, can sign in with existing credentials, if the form is valid.
This can be tested with the same method as for sign-up, but clicking "sign in" in the navigation bar or adding `/sign-in` to the URL, then using existing authentication instead of making up one.

- If the sign-in form is invalid, warning messages appear:
Missing the password field:
![invalid-signin-1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/invalid-signin-1.png)
Invalid username and password
![invalid-signin-2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/invalid-signin-2.png)

- If signed in, clicking "sign out" will sign said user out:
This can be tested by signing in and then clicking "sign out" at the navigation bar.


404:
---
- If inside an invalid page, a 404 message appears:
This can be tested by adding any nonsensical text to the URL, such as `/sauce`:

Navigation bar options:
---
- If signed out, the navigation bar options are: "Browse", "Sign in", and "Sign up":
This can be tested by visiting HiDoc for the first time. If you're a regular, make sure to click "sign out" in the navigation bar:
![navbar-signout](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/navbar-signout.png)

- If signed in, the navigation bar options are: "Browse", "Create project", "Watch List", "Sign out", and "My projects":
This can be tested by signing in. If you're a regular, chances are these options appear upon visitation:
![navbar-signin](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/navbar-signin.png)

- If scrolling down, the navigation bar is fixed at the top of the page.


Browsing:
---
- All projects on the API are displayed on the browse page.
- Entering text in the search bar will filter all projects according to the text input:
By default, all projects stored on the API will appear:
![search-bar-unfiltered](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/search-bar-unfiltered.png)
There's a test project named "bunny". By typing "bunny" in the search bar, there will be a project of a pink bunny with wings, and nothing else (unless another user in the future has made a project with "bunny" in their project name):
![search-bar-filtered](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/searct-bar-filtered.png)


CRUD project:
---
- The Browse page can retrieve all projects on HiDoc:
Upon visiting, the main page will display the text "loading projects", after a couple of seconds, a list of projects will appear in an infinite scroll.

- Can create a project, where the image is mandatory, and the "Title", "Description", and "Deployed link" allow empty input:
By signing in, the create project is accessible in the navigation bar:
![project-crud-1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/project-crud-1.png)

- A warning message occurs if the user doesn't provide an image:
Leaving the image input empty, there will be an error message:
![project-crud-2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/project-crud-2.png)

- A warning message occurs if the user applies an invalid URL in the Deplyed link:
Strings such as "invalid link" will make the message appear:
![project-crud-3](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/project-crud-3.png)

- If the owner of any project, an option icon appears in the top right corner:
To easily find projects you own, click "my projects" in the navigation bar. The projects have a special icon in the top right corner, clicking it displays an edit and a delete icon:
![project-crud-4](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/project-crud-4.png)

- The owner of a project can edit their project, changing the image, title, description and deployed link:
If you own the project, a button for editing a project is displayed. For instance, the deployed link can send the user to Youtube.com before the edit, and Reddit.com after the edit:
![project-crud-5](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/project-crud-5.png)

- Unauthenticated users are prompted to the home page if 'trying' to edit another user's project:
If signed out, and added `/projects/51/edit` to the URL, the bunny example project, the user will be prompted to the home page. This page should only be accessible to the owner of that project.

- The owner of a project can delete the project:
For a project you own, clicking "delete" will delete the project.
![project-crud-4](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/project-crud-4.png)

Watch project
---
- If not owner, the option to watch is available:
The bunny example project displays a "watch project" button from any account that isn't the owner:
![watch_project_2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/watch_project_2.png)

- If clicking "Watch project", the appearance of that button changes to "Unwatch project":
The appearance changes when clicking the button:
![watch_project_3](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/watch_project_3.png)

- If clicking "Unwatch project", the appearance of that button changes to "Watch project".
The appearance changes when clicking the button:
![watch_project_2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/watch_project_2.png)

- If not watching any projects, the "watch list" view renders a message: "Projects you're watching will appear here".
This can be tested by making sure you're not watching any projects:
![watch_project_4](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/watch_project_4.png)

- If watching any projects, the "watch list" view renders all projects where said user clicked "watch project".
Comparing the "browse" page to the "watch list" page, notice that only projects you're watching will appear in the watch list:
![watch_project_5](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/watch_project_5.png)

My projects
---
- My projects page renders all projects belonging to the art account.
Comparing the "browse" page to the "my projects" page, notice that only projects you own will appear on the page:
![my-projects-1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/my-projects-1.png)
![my-projects-2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/my-projects-2.png)


Documentation
---
- If the owner of any project, can write text and add documentation.
This was tested by signing in with HiDoc-testuser1's account and checking project ID 51. The add documentation option is visible.
![documentation-1](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/documentation-1.png)

- If the owner of any project, can delete previously added documentation.
This was tested by signing in with HiDoc-testuser1's account and checking project ID 51. The delete documentation option is visible.
![documentation-2](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/documentation-2.png)

- If not the owner, neither the create documentation nor delete documentation button are visible.
This was tested by signing out and revisiting project ID 51. Neither the add or delete option is visible.
![documentation-3](https://raw.githubusercontent.com/MidnattLantern/hidoc/main/Readme%20images/manual_testing/documentation-3.png)
