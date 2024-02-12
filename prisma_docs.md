# PRISMA

## Installation

- NPM

```text
npm install prisma --save-dev   
```

- YARN

```text
yarn add prisma --dev
```

## Usage

- NPM

```text
npx prisma  
```

- YARN

```text
yarn prisma
```

## Commands

```text
            init   Setup Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema
            help   Additionnal help
```

## Examples

```text
  Setup a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push
  ```

## Telemetry, opt-out of data collection

You can opt-out of usage data collection by setting the CHECKPOINT_DISABLE environment variable to 1.

```text
export CHECKPOINT_DISABLE=1
```

## More informations

<https://www.prisma.io/docs/orm/tools/prisma-cli>
