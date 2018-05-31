# Typescript Node Environment
A minimal node-based development environment configured to use Typescript, Jasmine, Istanbul and Docker.

## Features
- Code and tests all written and compiled from Typescript
- Supports using 3rd party imports using ES6-style importing
- Tests and code coverage in Typescript
- Fast dev env
- Build a Docker container

## Commands

### Installing
Call `npm i` to install dependencies.

### Running
Call `npm start` to run the program, located at `src/index.ts`.

### Running tests
Call `npm test` to run through the full suite of tests in one run.

### Testing (bdd)
Call `npm run test-bdd` to run through the full suite of bdd tests in one run.

### Testing (coverage)
Call `npm run coverage` to view the html docs of the coverage report (a coverage xml file and html docs are automatically generated after running the tests).

### Building Docker
Call `npm run docker-build` to build a Docker container for the project.

### Running Docker
Call `npm run docker-run` to run the Docker container locally, routing local ports.


## How to

### Adding code
The entry file for compiling and running the Typescript is 'src/index.ts'. Add your own code by creating a file with the '.ts' extension in the src directory (or subdirectory).

### Writing tests
Add your unit tests to the src directory (or subdirectory) with the file extension '.spec.ts'.

### Mocking imports
You can use the `Mockery` library to override the imports for unit testing

### Opening additional ports
When extra ports are needed to be exposed, these will need adding to the `Dockerfile`, the following snippet can be used:
```
EXPOSE {port}
```

In addition, the `package.json` file will need modifying, the extra port will need adding to the map when running the Docker instance. For example, port 8080 is currently mapped to the local port 8080:
```
{
  ...
  "scripts": {
    ...,
    "docker-run": "docker run -p 8080:8080 app"
  },
  ...
}
```

### Add 3rd party libraries
Install the library via:
```
npm i {libraryName}
```

e.g. 
```
npm i jquery
```
```
npm i rxjs
```

Start using the library via ES6 import:

e.g. 
```
import * as jquery from 'jquery';
```
```
import { Subject } from 'rxjs';
```

## Licence
All code is licenced under MIT.
