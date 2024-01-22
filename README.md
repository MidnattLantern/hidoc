HiDoc is built upon React/ React Bootstrap.


Setup:
---
- In terminal (only if the root is empty):
`npx create-react-app - --use-npm`
- Why?
Creating a new setup upon an existing template or app will make the code hard to maintain and hard to make sense.

- React-Bootstrap (ver 4) is specifically designed for React. To install (ver 4), run in terminal:
`npm install react-bootstrap@1.6.3 bootstrap@4.6.0`


Tangle in development:
---
- Documentation of encountered problems and how they were solved:
- In case of 3000 error, switch to another version. In terminal:
`nvm install 16 use 16`

- when you run `npm start`, a port will be used to host the app. During development for HiDoc, that port was "3000".
- Should a port break, and cannot be stopped with the usual ctrl+C `keyboard command, run this in terminal:
`lsof -i :3000`
- Find the PID numbers for port 3000
- In terminal:
`kill -9 (PID number)`


Run:
---
- In terminal:
`npm start`
You may need to change the directory
...


User stories:
===
- As a user, I can see a navigation bar from every page so that I can easily navigate around HiDoc.
- As a user, I can sign up.
- As a user, I can sign in.