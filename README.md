<h1 align="center">Microservice Nodejs Template</h1>
<p align="center">
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"
      alt="Prettier"
    />
  </a>
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Lerna">
  </a>
  <a href="" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/dotrungkien/2048" />
  <br>
</p>

<h4 align="center">
Lerna + Docker + Typescript + EsLint + Prettier
</h4>

# Table of Contents

- [Introduction](#introduction)
- [Techstack](#techstack)
- [Install](#install)
- [Usage](#usage)
- [Project Structure](#project-structure)
  - [api_gateway container](#api_gateway-container)
  - [backend container](#backend-container)
- [Contributing](#contributing)

## Introduction

> The simple project shows how to setup monorepo by Typescript + Docker + Lerna + Eslinter + Prettier.

The project has 3 packages (inside [packages directory](https://github.com/TranBaVinhSon/microservice_nodejs_template/tree/master/packages))

- api_gateway (http server)
- backend (http server)
- base (shared package between `api_gateway` and `backend`)

_Note: Each package has its own client, tsconfig, preitter config._

## Techstack

- [Lerna](https://github.com/lerna/lerna) - A tool for managing JavaScript projects with multiple packages
- [TsED](https://tsed.io/) - A TypeScript Framework on top of Express
- Docker
- Eslint + Prettier

## Install

```sh
make install-all
```

That's it 🚀

## Usage

Go to root project: `cd microservice_nodejs_template`

### Running project

```sh
docker-compose up
```

That's it 🚀

After run `docker-compose up`, you will see `api_gateway` container runs on `3000` port. and `backend` container runs on `8000` port.

(you can also check the api by make a request to `GET localhost:3000/api/v1/users/`)

![Screen Shot 2019-12-07 at 4 14 47 PM](https://user-images.githubusercontent.com/12994069/70370632-c5f9b600-190c-11ea-9e7b-9ca501a03e0a.png)

### Compile ts to js

- Compile all packages

```
npm run build
```

- Compile `api_gateway` package

```
npm run build:api_gateway
```

- Compile `backend` packages

```
npm run build:backend
```

- Compile `base` package

```
npm run build:base
```

### Running Eslint

- Running Eslint on all packages

```
npm run eslint
```

## Project Structure

Each package under the `packages` folder.

```
microservice_nodejs_template
├── docker/
│   ├── api_gateway/
│   │   └── Dockerfile
│   ├── backend/
│   │   └── Dockerfile
├── packages/
│   ├── api_gateway/
│   │   └── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │
│   ├── backend/
│   │   └── src/
│   │   └── package.json
│   │   ├── tsconfig.json
│   │
│   ├── base/
│   │   └── src/
│   │   └── package.json
│   │   ├── tsconfig.json
│
├── docker-compose.yml
├── package.json
├── lerna.json
├── README.md
```

### `api_gateway container` structure

```
microservice_nodejs_template
├── packages/
│   ├── api_gateway/
│   │   └── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │
│   ├── base/
│   │   └── src/
│   │   └── package.json
│   │   ├── tsconfig.json
│
│
├── package.json
├── lerna.json
```

### `backend container` structure

```
microservice_nodejs_template
├── packages/
│   ├── backend/
│   │   └── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │
│   ├── base/
│   │   └── src/
│   │   └── package.json
│   │   ├── tsconfig.json
│
│
├── package.json
├── lerna.json
```

## Contributing

Contributions, issues and feature requests are welcome.
