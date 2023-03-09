This is a node.js/express app that shows the use of mongo db as a session store.
Based on:
`https://progressivecoder.com/nodejs-session-management-with-express-session-and-mongodb/`

### Usage
1. Download project from github
1. Change to project's directory
1. Run: `./dockerStartMongoDb.sh` (sorry, assumes Mac or Linux)
    * The above will start up an instance of a mongoDB in a docker contaner at port 27888
1. Run: `npm install`
1. Run: `node app.js`
1. Open browser to `http://localhost:3000`
1. Provide the login credentials: abc@gmail.com/pass123