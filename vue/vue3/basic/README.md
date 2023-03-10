# lolaDB Vue 3 Basic Example

A basic examples for using [lolaDB](https://loladb.com?utm_source=github&utm_medium=js-framework-examples&utm_campaign=vue) with Vue.

This example allows you to query any connected datbase, including MySQL, PostgreSQL, MariaDB, and more. See a full list of supported databases here: [lolaDB Supported Sources](https://docs.loladb.com/guides/supported-sources/?utm_source=github&utm_medium=js-framework-examples&utm_campaign=vue)

## lolaDB Docs

You can always reference the [lolaDB Developer Docs](https://docs.loladb.com/?utm_source=github&utm_medium=js-framework-examples&utm_campaign=vue) for more information.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Prerequisites

### Test Data Setup

For this example to work on your local machine as shown in the examples, you must setup a database with an 'orders' table. The table should have the following columns:

- orderId
- productName
- quantity
- customerId

Insert some dummy data. You can use the following SQL statement:

```sql
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589491, 'NuGrape', 12, 384164);
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589488, 'Cheerwine', 6, 897788);
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589490, 'RC Cola', 5, 794576);
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589489, 'Sunkist', 3, 637786);
```

### Create your query

Within the lolaDB UI, create a `Source` within your `Hub` that connects to your database. Create a `Query` that selects the data you want to display in your frontend application. You can use the following SQL statement:

```sql

SELECT * FROM orders;

```

Save your query and copy the `Query ID` from the top right hand corner to use in your demo app.

## Recommended IDE Setup (From the Vue team)

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
