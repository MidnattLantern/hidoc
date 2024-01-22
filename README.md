HiDoc is built upon React/ React Bootstrap.


Setup:
---
- In terminal (only if the root is empty):
`npx create-react-app - --use-npm`
- Why?
Creating a new setup upon an existing template or app will make the code hard to maintain and hard to make sense.


Trouble in development:
---
- Documentation of encountered problems and how they were solved:
- In case of 3000 error, switch to another version. In terminal:
`nvm install 16 use 16`

- The port 3000 was used to run the application. In case a port (in this case 3000) is already occupied, run this in terminal:
`lsof -i :3000`
- Look at the PID numbers for port 3000
- In terminal:
`kill -9 (PID number)`


Run:
---
- In terminal:
`npm start`
You may need to change the directory
...

