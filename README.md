## Description

Repo to reproduce error with TypeORM and Fastify

## Installation

```bash
$ npm install
```

Add your .env file with DB config

## Running the app

```bash
# watch mode
$ pnpm run start:debug
```

## Simulate error
Open Swagger on http://localhost:3001/docs

- Check that Body don't show
- Do request to /auth, decorator @Body() is undefined