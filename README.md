# 🧠 Hiring task

Create an app, that has a login-like screen containing 1 input field for username and a Login button. On clicking the Login button, call the provided checkUsername function. If the provided username is valid, checkUsername will return an email address. Handle returned errors. After successful login, show a new screen with the returned email address.

# ✅ Task Requirements

- use React function components
- use Material-UI
- use provided `checkUsername` function
- use state handling (e.g. no email address as url argument)

# ⚙️ checkUsername function

```javascript
export async function checkUsername(username) {
  // simulate API response delay
  await new Promise((res) => setTimeout(res, 100))

  if (RegExp(/^[a-z-_.]+$/i).test(username) === false) {
    return {
      error: 'InvalidFormat',
      data: "username can only consist of characters a-z, A-Z, '-', '_' and '.'",
    }
  }

  if (['admin', 'null', 'root'].includes(username)) {
    return { error: 'AlreadyExists', data: 'this username is already taken' }
  }

  return {
    error: null,
    data: `${username.toLowerCase()}fidoo.com`,
  }
}
```

# Live demo

https://molmartin.github.io/fidoo/

# 🔧 Project requirememnts

- min screen size 320px
- max input length 15
- Node.js **22.x**
- Yarn **1.x** (`Classic`)

## Instalation

```bash
yarn install
```

## Run local development

```bash
yarn dev
```

# 🧰 Available Scripts

You can run the following scripts with Yarn:

- <code>yarn dev</code> – starts the development server using Vite
- <code>yarn build</code> – compiles TypeScript and creates a production build
- <code>yarn preview</code> – serves the production build locally
- <code>yarn lint</code> – runs ESLint on the entire project
- <code>yarn type-check</code> – performs a type check without emitting files
- <code>yarn test</code> – runs unit tests with Vitest
- <code>yarn test:ui</code> – opens the Vitest UI test runner
- <code>yarn test:e2e</code> – runs end-to-end tests using Playwright
- <code>yarn test:e2e:headed</code> – runs e2e tests in headed mode (with browser UI)
- <code>yarn test:e2e:ui</code> – opens the HTML report from the last e2e test run
- <code>yarn test:e2e:debug</code> – runs e2e tests in debug mode
- <code>yarn test:e2e:install</code> – installs Playwright with all dependencies
