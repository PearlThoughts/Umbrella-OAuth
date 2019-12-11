# Express REST API Boilerplate

Boilerplate/Generator/Starter Project for building RESTful APIs and microservices using Node.js, Express and Sequelize

## Features

 - No transpilers, just vanilla javascript
 - ES2017 latest features like Async/Await
 - CORS enabled
 - Uses [yarn](https://yarnpkg.com)
 - Express + Sequelize ([Sequelize](https://sequelize.org/master/index.html))
 - Consistent coding styles with [editorconfig](http://editorconfig.org)
 - Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
 - Load environment variables from .env files with [dotenv](https://github.com/motdotla/dotenv)
 - Tests with [jest](https://jestjs.io/) and [supertest](https://github.com/visionmedia/supertest)
 - Logging with [morgan](https://github.com/expressjs/morgan)
 - Rollbar [rollbar](https://rollbar.com/)

## Requirements

 - [Node v8+](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Install dependencies:

```bash
yarn
```

#### Add dependencies:

```bash
yarn add <package-name>
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

## Test

```bash
# run all tests with Jest
yarn test
```
