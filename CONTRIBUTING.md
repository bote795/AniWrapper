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


## Deploy new version

1. `npm run cover:only`
2. `npm run build`
3. `npm run deploy`
4. `npm version <update_type>` release types (patch, major, or minor):
4. `npm publish`
