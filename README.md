# link-shortify

**Link-Shortify** is a URL shortening web application that allows users to create, manage, and track shortened links. Built with Next.js on the frontend and a fully serverless AWS infrastructure on the backend.

Deployed URL: [https://link-shortify.vercel.app/](https://link-shortify.vercel.app/)

## Features


- Create shortened URLs with auto-generated or custom slugs
- Track clicks and statistics for each shortened link
- QR code generation for any shortened link
- Authentication via Google OAuth
- Simple and clean user interface
- Responsive design

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

- **AWS Lambda** for serverless compute
- **AWS API Gateway** for HTTP routing
- **AWS DynamoDB** for storing shortened URLs and analytics data
- **AWS Cognito** for authentication (Google OAuth)
- **AWS CloudFront** as CDN and single entry point
- **AWS S3** for static assets
- **Upstash Redis** for rate limiting
- **TypeScript**
- **Jest** for unit testing
- **Supertest** for API testing
- **Swagger** for API documentation
- **AWS CDK + SST** for infrastructure as code

### Development Tools

- **Yarn** for package management
- **Husky** for pre-commit linting hooks
- **Lint-Staged** for formatting and linting staged files
- **Prettier** for code formatting
- **ESLint** for static code analysis
- **CI/CD** with **GitHub Actions**

---

## Get Started with **Link-Shortify**

Welcome to **Link-Shortify**! This project is built using **Next.js** as the foundation, providing a powerful framework for modern web development. Below are the steps to get started, including how to set up the development environment, build the project, and run essential scripts.

### Prerequisites

Ensure the following software is installed on your system:

- **Node.js** (version 18 or later recommended)
- **Yarn** (required — the project uses Yarn workspaces)
- **Docker** (optional, for specific testing configurations)

---

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YuHlushchenko/link-shortify.git
cd link-shortify
yarn install
```

---

### Development Workflow

Start the development server:

```bash
yarn dev
```

Open http://localhost:3000 in your browser to see the app.

---

### Building for Production

To create a production build:

```bash
yarn build
```

Serve the production build locally:

```bash
yarn start
```

---

### Linting and Formatting

- **Lint code**: `yarn lint`
- **Fix linting errors**: `yarn lint:fix`
- **Check code formatting (Prettier)**: `yarn lint:prettier`
- **Fix code formatting**: `yarn lint:prettier:fix`
- **Lint stylesheets**: `yarn lint:style`
- **Fix stylesheet issues**: `yarn lint:style:fix`

---

### Testing

Run different types of tests:

1. **Unit tests** (via Jest):

```bash
   yarn test:unit
```

2. **Visual regression tests** (via Loki):

   - Test current UI:

```bash
     yarn test:ui
```

   - Approve visual changes:

```bash
     yarn test:ui:ok
```

   - Run tests in CI:

```bash
     yarn test:ui:ci
```

   - Generate test reports:

```bash
     yarn test:ui:report
```

---

### Storybook for UI Development

Launch **Storybook** to develop and view UI components in isolation:

```bash
yarn storybook
```

Build a static version of Storybook for deployment:

```bash
yarn storybook:build
```

---

### Pre-commit Hooks

The project uses **Husky** and **lint-staged** for pre-commit checks:

- Code is automatically linted and formatted before each commit.

---

### Setting up **i18n Ally** for the Project

**i18n Ally** is a VS Code extension that simplifies working with localization in your project [Official Documentation for i18n Ally](https://github.com/lokalise/i18n-ally). Below are the steps to configure it for your setup.

#### 1. **Install the Extension**

Install **i18n Ally** in VS Code:

- Open the **Extensions** panel (Ctrl+Shift+X).
- Search for `i18n Ally`.
- Click **Install**.

#### 2. **Create Configuration Files**

In the root of the project, create a directory named `.vscode` and add the following files:

##### **2.1. i18n-ally-custom-framework.yml**

This file customizes key detection in your project:

```yaml
languageIds:
  - javascript
  - typescript
  - javascriptreact
  - typescriptreact

usageMatchRegex:
  - "[^\\w\\d]t\\(['\"`]({key})['\"`]\\)"
  - "[^\\w\\d]useTranslations\\(['\"`]({key})['\"`]\\)\\.\\w+"

scopeRangeRegex: "useTranslations\\(\\s*['\"`](.*?)['\"`]"

monopoly: true
```

##### **2.2. settings.json**

This file defines the main paths and format for your localization files:

```json
{
  "i18n-ally.localesPaths": ["client/public/locales"],
  "i18n-ally.pathMatcher": "{locale}/{namespace}.json",
  "i18n-ally.keystyle": "nested"
}
```

#### 3. **Usage**

Once configured:

- Open any file containing translation keys, and **i18n Ally** will automatically recognize them.
- Use the extension to manage keys, edit translations, and find usages directly from the editor.

Your project is now ready for smooth localization management with **i18n Ally**! 🚀

---

Feel free to contribute, report issues, or customize as needed. Happy coding! 🎉