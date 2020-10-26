This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run static HTML Version

In the folder `/build`, open the file `index.html` in your browser.

This runs a static version of your webapp with no server needed.

## To Run In Development

In your terminal, run `npm i` or `npm install`. You will need npm version 5.2+ and Node.js 0.10 or above. After installing, run `npm start` and open [http://localhost:3000](http://localhost:3000)

Webpack will handle the rest.

If editing, the page will reload with your changes so there's no need to restart your server. CSS/SASS/SCSS all gets compiled automatically by `create-react-app` as well, though you may have to refresh the page.

## Make a new build

Run `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

In your `package.json`, make sure that `"homepage": "./"`, so that the static `.css` and static `.js` files point to the right place

## Run In Production/Build/Compiled Version on a local server

In your terminal, run `npm i` or `npm install`. You will need npm version 5.2+ and Node.js 0.10 or above. After installing, run `node server.js` and open [http://localhost:8080](http://localhost:8080)

This will start an Express server that serves files from `/build`.

Alternatively, you can run the commands shown in the terminal after running `npm run build ` (Note: This will create a new build of your web app)

**`npm run build ` is used for final deployment in production. All development must be in `/src`.**

Do not edit code within the `/build` file, it will get overwritten when `npm run build` is run again. If you need to make changes, make your changes in the `/src` directory and then run `npm run build` again for production testing.

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
