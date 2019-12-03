
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
  </a><br>
</p>

<h4 align="center">
Lerna + Docker + Typescript + EsLint + Prettier
</h4>

## Techstack
- [Lerna](https://github.com/lerna/lerna) - A tool for managing JavaScript projects with multiple packages
- [TsED](https://tsed.io/) - A TypeScript Framework on top of Express
- Docker
- Eslint + Prettier
 
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

## Install

```sh
make install-all
```

## Usage

```sh
docker-compose up
```
