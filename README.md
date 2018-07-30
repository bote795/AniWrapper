[![CircleCI](https://circleci.com/gh/bote795/AniWrapper.svg?style=shield&circle-token=ce2f33360f50fe15289d265ebcbdf06f32f21360)](https://circleci.com/gh/bote795/AniWrapper)
[![dependencies Status](https://david-dm.org/bote795/AniWrapper/status.svg)](https://david-dm.org/bote795/AniWrapper)
[![devDependencies Status](https://david-dm.org/bote795/AniWrapper/dev-status.svg)](https://david-dm.org/bote795/AniWrapper?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/bote795/AniWrapper/badge.svg?branch=master)](https://coveralls.io/github/bote795/AniWrapper?branch=master)
[![npm version](https://badge.fury.io/js/aniwrapper.svg)](https://badge.fury.io/js/aniwrapper)
[![downloads](https://img.shields.io/npm/dt/aniwrapper.svg)](https://img.shields.io/npm/dt/aniwrapper.svg)
# AniWrapper

Api Wrapper for AniList   
[Anilist API Documentation](https://anilist.gitbooks.io/anilist-apiv2-docs/)

## Install
 ```sh
yarn add aniwrapper
npm install --save aniwrapper
```


### Get Token
To retrieve a token you can go to the following and paste your token     
[GetToken](https://anilist.co/api/v2/oauth/authorize?client_id=673&response_type=token)    
You can also retrieve a token setting up your own anilist app   
<b>make sure not to expose your token to a github repo or post it online</b>

## Basic Usage
```js
import Anilist from 'aniwrapper'             // ES Modules and Babel
const Anilist = require('aniwrapper')        // CommonJS and Browserify
const Anilist = require('aniwrapper/node')   // node-only package
```
## Quick Start
```js
//node
const Anilist = require('aniwrapper/node');
const aniClient = new Anilist(token);
aniClient
  .getUserList()
  .then((result) => console.log(result));
```
## [Documentation](http://nicolasbotello.com/AniWrapper/)

