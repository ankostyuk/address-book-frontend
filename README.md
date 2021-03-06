# Address Book Frontend

[Test](https://gist.github.com/olegvg/29e9ad1000aa695059b0825c99486cd5) for Fullstack Developer to [O:LABS](http://o-labs.ru/).

# Application

Prototype: frontend only, no backend:

[Address Book App](https://ankostyuk.github.io/address-book-frontend/)

# Project

## Init

Install:
* nodejs 5.10+
* npm

```bash
npm install
```

## i18n

Install `gettext` for i18n support.

```bash
npm run i18n
```

## Dev

```bash
npm run dev
```

[http://localhost:8090](http://localhost:8090)

## Tests

### Unit

```bash
npm run test:unit
```

### e2e

```bash
# Of necessity
./node_modules/protractor/bin/webdriver-manager update
```

```bash
npm run dev
```

```bash
npm run selenium
```

```bash
npm run test:e2e
```

## Production

```bash
npm run production
```

[/dist](/dist)
