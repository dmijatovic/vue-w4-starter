# Vuejs webpack 4 (simple) starter template

This is simple webpack 4 starter with scss enabled. At the moment of creating this started vue-cli uses webpack v3. I wanted to create starter more tailored toward my needs.

I will probably use vue-cli when it gets to version 3 and starts using webpack v4. For now this is simple starter just to learn webpack 4 and integration of vue.js in it.

I started completely from scratch on 2018-05-29 taking all latest versions avaliable.

## NPM installation scripts

Just run `npm install` and all libs mentioned here below should be installed.

```bash
  # 1. install webpack
  npm i webpack webpack-cli webpack-dev-server -D
  # 2. install vue
  npm i vue --save
  # 3. install vuejs loader
  npm i vue-loader vue-template-compiler -D
  # 4. install scss loaders
  npm i node-sass sass-loader css-loader mini-css-extract-plugin postcss-loader -D
  # 5. install babel loaders
  npm i babel-loader babel-core babel-preset-env babel-preset-stage-2 -D
  # 6. install other webpack util plugins
  npm i html-webpack-plugin copy-webpack-plugin uglifyjs-webpack-plugin clean-webpack-plugin file-loader url-loader -D
  # 7. install vue-router
  npm install vue-router --save
```

## NPM scripts

- `npm start:` start webpack in watch mode passing dev environment (--env=dev).
- `npm run dev:` start webpack-dev-server using dev environment (--env=dev)
- `npm run build-dev:` Build development version.
- `npm run build-prod:` Build production version to dist folder. Note that previous build will be removed first.

## Webpack config scripts

Webpack configuration is stored in webpack folder. Initially 2 separate def files are created. Based on --env parameter passed on init one of the configuration files is loaded as webpack config module (see webpack.config.js)

- `dev:` this is development environment setup (webpack/dev.js)
- `prod:` this is production build setup (webpack/prod.js).

**Note! Configuration is not 'shared' between files. When updating, please adjust/update the properties in both files.**

BTW: I prefer having simpler approach with some code duplication above more complex setup without code duplication.