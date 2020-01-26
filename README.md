# simple-iframe-demo

# Setup
1. Install node.js if not already installed
2. Clone the repository
3. Inside `payment-server\backend` folder, run `npm install` command
4. Inside `app-server\backend` folder, run `npm install command
5. Install `lite-server` npm package globally using command `npm i -g lite-server`
6. Run `node payment-server.js` command inside `payment-server\backend` folder
7. Run `node app-server.js` command inside `app-server\backed` folder
8. Run `lite-server` command inside `payment-server` folder. It will start web server and launch index.html file. This should be on port number 3001.
9. Run `lite-server` command inside `app-server` folder.
10. Make sure all commands are running in parallel.

# Flow

The `payment-server` folder contains the web page which shall be served as an iframe. We start the web server in this folder on port 3001.
The `Process Payment` button click shall hit `payment-server.js` file inside `backend` folder using POST method and server will internally send POST request to `app-server\backend\app-server.js` file mocking responseURL. 
The `app-server` foldre contains the web page mocking thee client web app loading iframe.


