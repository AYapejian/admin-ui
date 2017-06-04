# admin-ui

> An admin template

## TODO Notes
* i18n setup through [vue-i18n](https://kazupon.github.io/vue-i18n/)
    * Initial locale is manually set in `main.js` ( NOTE: Should be detected by browser setting and preferences )
    * Every locale has a language map in `src/locales/{{locale}}.js` that should match the standardized targeted locale
    * All strings should refer to the message map within components by `{{ $t('login.message') }}`
    * TODO: For interpolation that includes HTML look at [this](https://kazupon.github.io/vue-i18n/en/interpolation.html)

* Routing
    * Routes are setup in `src/components/router`
    * Route metadata is used in certain portions of the app ( Toolbar for current view name for instance )
    * The current route state is always available in vuex as `store.state.route`
    * To add a new route:
        - First add it's vue component
        - Add a route metadata definition in `src/components/router/route-metadata`
        - Add the route in `src/components/router/index.js`
        - Add a nav menu item if needed
            - _TODO: Derive nav drawer menu from route metadata file_

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
