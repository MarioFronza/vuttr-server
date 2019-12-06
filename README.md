<h1 align="center">VUTTR</h1>

<p align="center">Very Useful Tools to Remember 🦇</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Dependencies

- [Node.js](https://nodejs.org/en/) 8.0.0 ou >
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Prerequisites

To run this server you will need one container running on your machine.

To do so, you will need to run this command:

- `docker run --name mongodb -p 27017:27017 -d -t mongo`

## Getting started

1. Clone this repo using `https://github.com/MarioFronza/vuttr-server.git`
2. Move to the appropriate directory: `cd vuttr-server`.
3. Create `.env` and `.env.test` files.
4. Run `yarn` to install dependencies.
5. Run `yarn start` to see the example app at `http://localhost:3000`.

## Tests

To run all tests suites execute this command on the server directory:

- `yarn test`

## Documentation

You can see all the api documentation in this [HTML file](docs/output.html). Just open it in your browser.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
