## Stream  Admin_Dash_PoC
Contains Application code configurations, Built in React.JS

## Initialization
To install dependencies and clean the git repo:

```Shell
npm run setup
```

##npminstall
DO NOT include setup.js - 

Initializes a new project with this Application. Deletes the `react-apps`
git history, installs the dependencies and initializes a new repository.

> Note: This command is self-destructive, once you've run it the init script is
gone forever. This is for your own safety, so you can't delete your project's
history irreversibly by accident.

##Charting Components

Run the commands below to install the node-react-chart.js modules.

```Shell
npm install chart.js --save
npm install react-linechart --save
npm install react-donut-chart --save
```

## Development

```Shell
npm run start
```
Starts the development server running on `http://localhost:3000`

##Authentication
```Shell
npm install react-cognito
```


## Cleaning

```Shell
npm run clean
```
## Build

```Shell
npm run build
```
## Publishing the Artifact
Upload the files in the Build directory on your server to publish the application

## Running Tests
[Testing](docs/testing): How to work with the built-in test harness;

1. Sprinkle `.test.js` files directly next to the parts of your application you
   want to test. (Or in `test/` subdirectories, it doesn't really matter as long
   as they are directly next to those parts and end in `.test.js`)

1. Write your unit and component tests in those files.

1. Run `npm run test` in your terminal and see all the tests pass! (hopefully)

* AppVeyor and TravisCI setups included by default, so your
    tests get run automatically on Windows and Unix.


License
This project is licensed under the MIT license, © 2017
