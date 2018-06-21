[![CircleCI](https://circleci.com/gh/bote795/AniWrapper.svg?style=shield&circle-token=ce2f33360f50fe15289d265ebcbdf06f32f21360)](https://circleci.com/gh/bote795/AniWrapper)
[![dependencies Status](https://david-dm.org/bote795/AniWrapper/status.svg)](https://david-dm.org/bote795/AniWrapper)
[![devDependencies Status](https://david-dm.org/bote795/AniWrapper/dev-status.svg)](https://david-dm.org/bote795/AniWrapper?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/bote795/AniWrapper/badge.svg?branch=master)](https://coveralls.io/github/bote795/AniWrapper?branch=master)
[![npm version](https://badge.fury.io/js/aniwrapper.svg)](https://badge.fury.io/js/aniwrapper)
# AniWrapper
Api Wrapper for AniList

* Need to inclue require('graphql-request') seperatly as it is not bundled
* since it currently has a problem will look into chaninging later

 ```sh
npm install graphql-request
npm install aniwrapper
```

Basic Usage
```js
require('graphql-request');
const Anilist = require('aniwrapper');
const aniClient = new Anilist(token);
aniClient
  .getUserList()
  .then((result) => console.log(result));
```
## [Documentation](http://nicolasbotello.com/AniWrapper/)
