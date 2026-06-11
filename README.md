# link-shortify

**Link-Shortify** is a URL shortening web application that allows users to create, manage, and track shortened links. Built with Next.js on the frontend and a fully serverless AWS infrastructure on the backend.

Deployed URL: [https://julab.space](https://julab.space)

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
- **Next.js** (v16.2.3) with Turbopack
- **TypeScript**
- **SCSS**
- **Custom Hooks** for reusable logic
- **Jest** for unit testing
- **React Testing Library** for testing components
- **Storybook** for component documentation
- **Zustand** for state management
- **TanStack Query** for server state and data fetching
- **AWS Amplify** for authentication and API communication
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
- **Vitest** for unit testing
- **Swagger** for API documentation
- **AWS CDK** for infrastructure as code

### Development Tools

- **Yarn** for package management
- **Husky** for pre-commit linting hooks
- **Lint-Staged** for formatting and linting staged files
- **Prettier** for code formatting
- **ESLint** for static code analysis
- **CI/CD** with **GitHub Actions**

---

## Get Started with **Link-Shortify**

### Prerequisites

Ensure the following software is installed on your system:

- **Node.js** (v20.9 LTS or later — required by Next.js 16)
- **Yarn** (required — the project uses Yarn workspaces)
- **Docker** (optional, for running DynamoDB Local in integration tests)

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

Start the development server (runs from the workspace root):

```bash
yarn workspace client dev
```

Or from the `client/` directory:

```bash
yarn dev
```

Open http://localhost:3000 in your browser to see the app.

---

### Building for Production

```bash
yarn workspace client build
yarn workspace client start
```

---

### Linting and Formatting

Run from `client/`:

- **Lint code**: `yarn lint`
- **Fix linting errors**: `yarn lint:fix`
- **Check code formatting (Prettier)**: `yarn lint:prettier`
- **Fix code formatting**: `yarn lint:prettier:fix`
- **Lint stylesheets**: `yarn lint:style`
- **Fix stylesheet issues**: `yarn lint:style:fix`

---

### Testing

#### Frontend (run from `client/`)

**Unit tests** (via Jest):

```bash
yarn test:unit
```

#### Backend (run from `server/`)

**Unit tests** (via Vitest):

```bash
yarn test:unit
```

**Watch mode**:

```bash
yarn test:watch
```

**Coverage report** (generates `server/coverage/index.html`):

```bash
yarn test:coverage
```

**Integration tests** — require DynamoDB Local running locally (via Docker):

```bash
# Start DynamoDB Local (from server/)
docker compose -f docker-compose.test.yml up -d

# Run integration tests
yarn test:integration

# Stop when done
docker compose -f docker-compose.test.yml down
```

> Integration tests create isolated tables (`test-links`, `test-clicks`) on startup and drop them on teardown. Each test uses unique IDs so tests don't interfere with each other.

#### Infrastructure (run from `infrastructure/cdk/`)

**Snapshot tests** (via Jest):

```bash
yarn test
```

**Update snapshots** after an intentional infrastructure change:

```bash
yarn test -u
```

> Snapshot tests synthesize each CDK stack to CloudFormation and compare the result against a stored snapshot. If anything changes (IAM policy, Lambda env var, DynamoDB billing mode, etc.) the test fails with a diff — update the snapshot only when the change is intentional.

---

### API Testing

To test the API endpoints manually, use the base URL from the AWS API Gateway console and a valid Cognito access token.

**Getting an access token:**

1. Run the client locally (`yarn dev`) or open the deployed app
2. Sign in via Google OAuth or email/password
3. Open browser DevTools → Application → Local Storage
4. Copy the value of the Cognito access token key (starts with `eyJ...`)
5. Use it as `Authorization: Bearer <token>` in your requests

---

### API Documentation (Swagger)

To browse the API documentation locally:

```bash
yarn docs:api
```

Opens Swagger UI at `http://localhost:8080`.

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

The project uses **Husky** and **lint-staged** for automated checks:

- **pre-commit**: staged files are linted and formatted automatically (ESLint + Prettier) for both client and server
- **pre-push**: unit tests, typecheck, and build run before pushing to remote

---

### Setting up **i18n Ally** for the Project

**i18n Ally** is a VS Code extension that simplifies working with localization in your project [Official Documentation for i18n Ally](https://github.com/lokalise/i18n-ally). Below are the steps to configure it for your setup.

#### 1. Install the Extension

Install **i18n Ally** in VS Code:

- Open the **Extensions** panel (Ctrl+Shift+X)
- Search for `i18n Ally`
- Click **Install**

#### 2. Create Configuration Files

In the root of the project, create a directory named `.vscode` and add the following files:

##### 2.1. i18n-ally-custom-framework.yml

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

##### 2.2. settings.json

```json
{
  "i18n-ally.localesPaths": ["client/public/locales"],
  "i18n-ally.pathMatcher": "{locale}/{namespace}.json",
  "i18n-ally.keystyle": "nested"
}
```

#### 3. Usage

Once configured, open any file containing translation keys and **i18n Ally** will automatically recognize them. Use the extension to manage keys, edit translations, and find usages directly from the editor.
