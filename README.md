# MovieCrab 2 

This project was bootstrapped with [Create React App] <br />
Using latest React 18, Redux, Typescript and Sass modules <br />
to produce Movies database view system

## Libraries used with the project
 3rd Party libraries:
   material-ui/core - material utils for table styling
   material-ui/icons - for icons in the table
   react-data-table-component - Table component

## Structure
 App.tsx - main App wrapper
  app / - neat hooks to help with redux state
  features / movies 
    api/ - api utils
    mocks/ - data mocks
    reducer/ - recuder handler
    table / 
      table.module.scss - styles for the table
      Table.tsx - Table view that uses 3rd party datatable component
    Movies.tsx - main Movies component

## How to run
 First install using yarn setup

 To run: 
  yarn start

 To build
  yarn build  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
