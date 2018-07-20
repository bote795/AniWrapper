# Contributing
To contribute fork the repo then create a branch and put a PR
## Install:
```bash
yarn install

yarn _postinstall
```
* add a `.env` file to your root with the following inside:
```bash
TOKEN=<YourToken>
QA_TOKEN=<YourToken>
```
* add a `cypress.env.json` file to your root with the following inside:
```json
{
  "QA_TOKEN" :"<YourToken>"
}
```
