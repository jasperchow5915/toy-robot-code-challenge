# Toy Robot Code Challenge by Wilson Mun

## Tech Stack
- [TypeScript][typescript] [4.1][typescript-4-1]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- Simple example of TypeScript code and unit test
- .editorconfig for consistent file format

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

## Starting the application
To start this application, please run the following commands

```
npm run build && npm run start
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run unit tests,
- `test:watch` - interactive watch mode to automatically re-run tests


## Tests

Unit tests can be found in the same directory as the corresponding class, 

e.g. the test for src/service/BoundaryService.ts can be found in src/service/BoundaryService.test.ts

To run all tests, execute the command
```
npm run test
```

This will run all test and generate a test coverage report

## License

Licensed under the APLv2. See the LICENSE file

## Credits
Initial fork/boilerplate code taken from https://github.com/jsynowiec/node-typescript-boilerplate