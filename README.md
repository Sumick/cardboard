<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://images.prismic.io/nerdbord/4603d4f2-4525-46dc-9fd6-c975661838bb_Wellcard+logo.png?auto=compress,format" alt="Logo" width="360" height="80">
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">

  <summary>Table of Contents</summary>
  
  
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
      <li>
          <a href="#architecture">Architecture</a>
        </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About

<p id="about-the-project">Cardboard is a single page application (SPA) for managing private notes.</p>

### Technologies used

- [Typescript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)
- [Styled components](https://styled-components.com/)
- [JSON server](https://github.com/typicode/json-server)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

<!-- GETTING STARTED -->

## Getting Started

Great to see you here!

Below you will find instruction how to setup project locally on your machine.

### Prerequisites

1. Ensure that you have Node.js installed on you machine.

- [What is Node.js and how to install it?](https://nodejs.org/en/)
- [How can I check if I have Node.js installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#checking-your-version-of-npm-and-nodejs)

2. Ensure that you have Yarn installed on you machine.

- [What is Yarn and how to install it?](https://yarnpkg.com/getting-started/install)

### Installation

1. Install required project dependencies by typing below command.
   ```sh
   yarn install
   ```
2. Start back-end service by typing:
   ```sh
   yarn server
   ```
3. Start front-end development by typing:
   ```sh
   yarn start
   ```

**_all commands must be typed in terminal in project root directory_**

<!-- USAGE EXAMPLES -->

## Architecture

For architecture flow chart [see here](https://whimsical.com/cardboard-Nt4fR5WBe2xUPSkf1ayHEG).

#### **Directory structure**

```
├── src
│   ├── api
│   │   ├── client.ts // axios client setuo
│   │   └── requests.ts // http requests configured
│   ├── components // UI layer
│   │   ├── Board
│   │   │   ├── Board.container.tsx // Container component for keeping business logic inside
│   │   │   ├── Board.tsx // Dumb, presentational component
│   │   │   └── __tests__ // Board integration and unit tests (always try to keep close to implementation)
│   │   └── Icons
│   ├── data // Domain separated data layer
│   │   ├── card
│   │   │   ├── api.ts // Card CRUD requests
│   │   │   ├── dto.ts // Data transfer object defined
│   │   │   ├── factory.ts // Factory for generating models, useful in tests
│   │   │   └── types.ts // Types for
│   │   └── index.ts
│   ├── hooks // handy, and reusable UI hooks
│   │   ├── useInput.ts
│   │   └── useOutsideClick.ts
│   ├── theme // global styles and tokens
│   │   ├── colors.ts
│   │   ├── globalStyles.ts
│   │   ├── spacings.ts
│   │   └── tokens.ts
│   └── utils // handy functions for solving repeatable problems
│       └── generators.ts

```

<!-- LICENSE -->

## License

All rights to this project belongs to [Nerdbord](https://nerdbord.io). This project is for educational purposes only.

<!-- CONTACT -->

## Contact

Jakub Wasowski, [E-mail](jakub@nerdbord.io) | [Github](https://twitter.com/your_username) | [LinkedIn](https://twitter.com/your_username)
