# array-flatten

> Write some code that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

## Prerequisites

* Node v8.4.0
* NPM v5.3.0

You can use [Node Version Manager](https://github.com/creationix/nvm) to make sure to use those exact versions.

Run `npm install` once from the project root (this directory), to install all modules needed for developing, testing, and compiling.

### Supported OSes

The code and scripts should be suitable to be run on MacOS, Linux, and Windows. Anyway, they have been tested on MacOS Sierra only.

## Usage

From the project root (this directory):

`npm start`  
Runs the code

`npm run start:w`  
Runs the code and watches for changes in `.ts` files

`npm test`  
Runs the test suite with a coverage report

`npm run test:w`  
Runs the test suite, watches for changes in `.spec.ts` files, and shows a coverage report on exit (`CTRL-C`)

`npm run dist`  
Builds a distribution in the `dist` directory

After a successful dist, you can run it with `node dist/index.js`.
