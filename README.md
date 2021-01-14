#### Stack

- React.js
- Node.js
- Nest.js
- Postgres
- Docker

### Prerequisites

Make sure you have the below installed on your machine.

- [x] **Docker** : https://docs.docker.com/engine/install/
- [x] **Docker-Compose** : https://docs.docker.com/compose/install/
- [x] **Node** : https://nodejs.org/en/

### File structre

```
AcroCharge
    |
    |---/ client (React + MaterialUI)
            |
            |---/ public
            |---/ src
            |
            .env
            .dockerignore
            .gitignore
            Dockerfile
            Dockerfile.dev
            nginx.conf
            tsconfig.json
            package.json
    |
    |---/ server (NestJS)
            |
            |---/src
            |
            ormconfig.json
            .dockerignore
            .gitignore
            Dockerfile
            Dockerfile.dev
            nodemon.json
            package.json
            wait-for-it.sh
    |
    |
    docker-compose.yml
    docker-compose-dev.yml
    .prettierrc
    README.md
```

## Overview
This is AcroCharge training project.
The project designed to run on any environment, as simply as possible.
The project init itself, also adding automatic the initial data.

The only command you should do is
```
 docker-compose --file docker-compose-dev.yml up
```

it will be served on `http://localhost:3000`

Currently production mode isn't supported (Need more time that I think is currently irrelevant)
## Disclaimers

There is a huge TODO list. it isn't the completed product but its good enought for MVP