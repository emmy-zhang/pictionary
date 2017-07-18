# pictionary

> A drawing game.

## Project Structure

``` txt
├── README.md                  <- Top-level README for developers.
├── build                      <- Webpack configuration files.
│   ├── ...
├── config                     <- Project configuration files.
│   ├── ...
├── index.html                 <- HTML template for app.
├── package.json               <- Project scripts and dependencies.
├── src
│   ├── App.vue                <- Main app file.
│   ├── components             <- UI components.
│   │   ├── ...
│   │   └── includes           <- UI fragments.
│   │       └── ...
│   ├── main.js                <- App entry file.
│   ├── router                 <- Vue-router configuration.
│   │   └── index.js
│   └── store                  <- Vuex configuration.
│       ├── index.js           <- Main Vuex file.
│       ├── modules            <- Vuex modules.
│       │   └── ...
│       └── mutation-types.js  <- Vuex mutation types.
├── static                     <- Static assets.
│   ├── assets
│   │   └── ...
│   └── styles                 <- Style files.
│       ├── _variables.scss    <- SCSS variables.
│       └── main.scss          <- Main style file.
└── yarn.lock
```

## Build Setup

``` bash
# Install dependencies
yarn

# Serve with hot reload at localhost:8080
yarn dev

# Build for production with minification
yarn build

# Build for production and view the bundle analyzer report
yarn build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
