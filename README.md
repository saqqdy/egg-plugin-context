<div style="text-align: center;" align="center">

# egg-plugin-context

An egg plugin for handle context

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install egg-plugin-context

# use npm
$ npm install egg-plugin-context --save

# use yarn
$ yarn add egg-plugin-context
```

## Usage

Enable context plugin

```js
// {app_root}/config/plugin.js
exports.withContext = {
    enable: true,
    package: 'egg-plugin-context'
}
```

### 1. Simple use

```js
// {app_root}/router.js

module.exports = app => {
	const { router, controller, middleware } = app

    router.post(
		'/api/test',
        middleware.withContext({ token: 100 }),
		controller.test
	)
}

// ctx.context.token === 100
```

### 2. Arguments passed into function

```js
// {app_root}/router.js

module.exports = app => {
	const { router, controller, middleware } = app

    router.post(
		'/api/test',
        middleware.withContext(ctx => ({ test: 100 })),
		controller.test
	)
}

// ctx.context.test === 100
```

### 3. Arguments passed into async function

```js
// {app_root}/router.js

module.exports = app => {
	const { router, controller, middleware } = app

    router.post(
		'/api/test',
        middleware.withContext(async ctx => (Promise.resolve({ test: 100 }))),
		controller.test
	)
}

// ctx.context.test === 100
```

## Options

### contextName

The contextName determines where to get the Context, like: `ctx.context`

```js
// {app_root}/router.js

module.exports = app => {
	const { router, controller, middleware } = app

    router.post(
		'/api/test',
        middleware.withContext({ token: 100 }, { contextName: 'contextData' }),
		controller.test
	)
}

// ctx.contextData.token === 100
```

## Change logs

[Change logs](./CHANGELOG.md)

## Questions & Suggestions

Please open an issue [here](https://github.com/saqqdy/egg-plugin-context/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/egg-plugin-context.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-context
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/egg-plugin-context/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/egg-plugin-context&utm_campaign=Badge_Grade
[snyk-image]: https://snyk.io/test/npm/egg-plugin-context/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-context
[download-image]: https://img.shields.io/npm/dm/egg-plugin-context.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-context
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_egg-plugin-context
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_egg-plugin-context
