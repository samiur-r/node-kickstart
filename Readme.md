# Node Kickstart

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node.js-%3E%3D%2018.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/Typescript-%5E5.2.2-blueviolet)](https://www.typescriptlang.org/)
[![PRISMA](https://img.shields.io/badge/PRISMA-%5E5.5.1-blue)](https://www.prisma.io/)
[![Express.js](https://img.shields.io/badge/Express.js-%5E4.18.2-green)](https://expressjs.com/)
[![Jest](https://img.shields.io/badge/Jest-%5E29.7.0-orange)](https://jestjs.io/)
[![Cypress](https://img.shields.io/badge/Cypress-%5E13.2.0-yellow)](https://www.cypress.io/)
[![ESLint](https://img.shields.io/badge/ESLint-%5E8.49.0-red)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-%5E3.0.3-purple)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-%5E8.0.3-blueviolet)](https://typicode.github.io/husky/#/)
[![Helmet](https://img.shields.io/badge/Helmet-%5E7.0.0-brightgreen)](https://helmetjs.github.io/)
[![Morgan](https://img.shields.io/badge/Morgan-%5E1.10.0-yellowgreen)](https://github.com/expressjs/morgan)
[![Yup](https://img.shields.io/badge/Yup-%5E1.2.0-lightgrey)](https://github.com/jquense/yup)

Kickstart your Node.js project with a robust, clean architecture and all the essential tools you need! This starter kit is designed to help you create scalable, maintainable, and production-ready applications in no time.

## Features

- :rocket: **Express.js**: Fast, minimalist web framework for Node.js. [Express.js](https://expressjs.com/)
- :label: **TypeScript**: Typed JavaScript at its best for enhanced development. [TypeScript](https://www.typescriptlang.org/)
- :hammer_and_wrench: **PRISMA**: A modern database toolkit for PostgreSQL, MySQL, and SQLite. [PRISMA](https://www.prisma.io/)
- :rotating_light: **ESLint**: A pluggable linter for JavaScript and TypeScript. [ESLint](https://eslint.org/)
- :nail_care: **Prettier**: Opinionated code formatter to ensure code consistency. [Prettier](https://prettier.io/)
- :anchor: **Husky**: Git hooks made easy for better code quality. [Husky](https://typicode.github.io/husky/#/)
- :white_check_mark: **Jest**: Delightful JavaScript Testing for Node.js projects. [Jest](https://jestjs.io/)
- :eyes: **Cypress**: Fast, easy, and reliable end-to-end testing for anything that runs in a browser. [Cypress](https://www.cypress.io/)
- :package: **Yup**: Schema validation for API input data. [Yup](https://github.com/jquense/yup)
- :taurus: **Helmet**: Helps secure your Express applications by setting various HTTP headers. [Helmet](https://helmetjs.github.io/)
- :loud_sound: **Morgan**: HTTP request logger middleware for Node.js. [Morgan](https://github.com/expressjs/morgan)
- :building_construction: **Clean Architecture**: A well-structured project layout for maintainability.
- :interrobang: **Error Handling**: Robust error handling to improve reliability.
- :sparkles: **Clean Code**: Follows best practices and clean code principles.
- :clipboard: **Example API (todos)**: Includes an example API for managing todo items.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- Yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/samiur-r/node-kickstart
cd node-kickstart
```

2. Install dependencies:

```bash
yarn install
```

3. Copy the env.example file to .env::

```bash
 cp .env.example .env
```

4. Start the development server:

```bash
yarn run start
```

### Build

Builds the production application

```bash
yarn run build
```

Starts the application in production mode.

```bash
yarn run start
```

### Testing

Unit Testing with Jest

```bash
yarn run test:unit
```

E2E Testing with cypress

```bash
yarn run test:e2e:open
yarn run test:e2e:run
```

### Linting and Formatting

Lint your code with ESLint:

```bash
yarn lint
```

Format your code with Prettier:

```bash
yarn format
```

### Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

### Feedback

If you have any questions or feedback, feel free to contact us:

- Email: samiur.rahman.akif@gmail.com
- GitHub Issues: https://github.com/samiur-r/node-kickstart.git/issues

### License

This project is open source and available under the MIT License.
