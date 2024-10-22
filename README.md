# link-shortify

**Link-Shortify** is a URL shortening web application built with technologies like Next.js (client), Express.js (server), and MongoDB. The purpose of this project is to provide a simple yet effective solution for shortening long URLs and managing them.

Deployed URL: [https://link-shortify.vercel.app/](https://link-shortify.vercel.app/)

## Features

- Create shortened URLs for any given long URL
- Track clicks and statistics for each shortened link
- Simple and clean user interface
- Responsive design
- Scalable and extendable architecture

## Tech Stack

### Frontend

- **FSD** (Feature-Sliced Design) architecture. More details: [Feature-Sliced Design](https://feature-sliced.design)
- **Next.js** (v14.2.13)
- **TypeScript**
- **SCSS**
- **Custom Hooks** for reusable logic
- **Jest** for unit testing
- **React Testing Library** for testing components
- **Storybook** for component documentation
- **Loki** for screenshot testing
- **Reg-cli** for reporting tests results
- **Zustand** for state management
- **Axios** for API requests
- **React Hook Form** for form handling
- Custom components (no UI libraries like Material-UI)

### Backend

- **Node.js** with **Express.js**
- **MongoDB** for storing shortened URLs and analytics data
- **TypeScript**
- **Jest** for unit testing
- **Supertest** for API testing
- **Mongoose** for MongoDB object modeling
- **Swagger** for API documentation

### Development Tools

- **Yarn** for package management
- **Husky** for pre-commit linting hooks
- **Lint-Staged** for formatting and linting staged files
- **Prettier** for code formatting
- **ESLint** for static code analysis
- **CI/CD** with **GitHub Actions**
