# Typescript Katas

This repo serves 2 purposes:

1) As a playground to solve typescript katas
2) As a showcase typescript repo which includes a testing framework, linting, formating and other useful repo tools

## Contributing to the repo

Add a new dir under the `src/` using camel case syntax for your new kata. Please make sure your new directory contains
a `README.md` outlining the kata, a test file with the `.spec.ts` extension and your source files.

A visual example from `tree`:

<pre>
├── src
│   └── fizzBuzz
│       ├── index.spec.ts
│       ├── index.ts
│       └── README.md
</pre>

Develop your code on a new git branch and push it up to the remote as you work. Bear in mind the git 
hooks will ensure that your tests have 99% code coverage and will lint/ format your code before pushing it.

When your happy with your code and ready to merge into main, please open a Pull Request by navigating 
[here](https://github.com/jaskaransarkaria/typescript-katas), fill out the PR with as much detail as possible. Prompt
another contributor to review your PR, address the comments and merge into main.
## Tech Stack

* [Typescript](https://www.typescriptlang.org/)
* [Eslint](https://eslint.org/) (using air bnb standards) - js code linter
* [Prettier](https://prettier.io/) - js code formatter
* [Husky](https://typicode.github.io/husky/#/) - git hooks
* [Ava](https://github.com/avajs/ava) - lightweight testing framework
* [Nyc](https://github.com/istanbuljs/nyc) - code coverage

## Useful Commands

* `npm run test:watch` - which allows you to watch the tests are you develop
* `git push --no-verify` - skip husky git hooks

n.b - see `package.json` for more commands