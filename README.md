<div align="center" style="padding-top: 10px;">
<img src="./src/images/react.png" alt="react logo" width="15%">
<img src="./src/images/postgresql.png" alt="postgres logo" width="30%" >
<img src="./src/images/knex.png" alt="knex logo" width="30%" >
</div>

# Compost City React-Redux App

Compost City was created to connect urban city dwellers who want to compost their food waste with farmers and gardeners who can benefit from using it. Users can create an account and select whether they would like to receive or share compost. Users who would like to receive can submit a post listing their location and specifications about which types of compost they can receive. Users who would like to share can search for posted listings within a selected distance from their location. If they find a posted listing, they can then contact that user. This was created during my time as a student at Code Chrysalis.

This app is deployed at https://compostcity.herokuapp.com/. To view this app's full functionality, you can either create your own account or log in as one of the ten seeded user accounts:
email: user1@email.com, user2@email.com, ... user10@email.com 
password: password

## 1. Set Up

Run `yarn` to install dependencies.

You will need the [PostgresApp](https://postgresapp.com/) installed. Run `psql` and create a database named compostcity by running `create database compostcity;`. Connect to your database by running `\c compostcity`.

Run `yarn build` to create a production build.

Run `yarn start` to start a production server. This will automatically run migrations.

If you'd like to run the app with some dummy data, run the following commands to seed the database. It's important that you run them in this order:

`yarn seed-users`

`yarn seed-posts`

You can now create your own account or use one of ten fake user accounts to play around with the app.
email: user1@email.com, user2@email.com, ... user10@email.com
password: password

## 2. Server Quick Start

Run `yarn dev` to start a hot-reloading development server.
