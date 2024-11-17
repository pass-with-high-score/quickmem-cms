# Quickmem Cms

## Prerequisites

- Node.js >= 18
- Yarn (optional)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/pass-with-high-score/quickmem-cms.git
    cd quickmem-cms
    ```

2. Install dependencies:

    ```sh
    yarn install
    ```

## Building the Project

To build the project, run:

```sh
yarn build
```

This will clean the `dist` directory, compile the TypeScript files, and copy the theme files to the `dist` directory.

## Running the Project

To start the project in development mode with hot-reloading, run:

```sh
yarn start:dev
```

To start the project in production mode, run:

```sh
yarn start
```

## Additional Scripts

- **Linting**: To lint the project files, run:

    ```sh
    yarn lint
    ```

- **Database Migrations**: To run TypeORM migrations, run:

    ```sh
    yarn typeorm migration:run
    ```

- **Clean PostgreSQL Database**: To clean the PostgreSQL database, run:

    ```sh
    yarn postgres:clean
    ```

- **Clean MongoDB Database**: To clean the MongoDB database, run:

    ```sh
    yarn mongodb:clean
    ```

- **Watch for Changes**: To build the project and watch for changes, run:

    ```sh
    yarn build:watch
    ```

## License

This project is licensed under the ISC License.
