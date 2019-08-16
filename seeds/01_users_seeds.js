const db = require("../server/knex.js");
const bcrypt = require("bcryptjs");

//fix user seed password!
(async () => {
  const seeds = [
    {
      email: "user1@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Jane"
    },
    {
      email: "user2@email.com",
      password: "password",
      username: "Sam"
    },
    {
      email: "user3@email.com",
      password: "password",
      username: "Yuki"
    },
    {
      email: "user4@email.com",
      password: "password",
      username: "Maria"
    },
    {
      email: "user5@email.com",
      password: "password",
      username: "Jon"
    },
    {
      email: "user6@email.com",
      password: "password",
      username: "Tanaka"
    },
    {
      email: "user7@email.com",
      password: "password",
      username: "Haruto"
    },
    {
      email: "user8@email.com",
      password: "password",
      username: "Austin"
    },
    {
      email: "user9@email.com",
      password: "password",
      username: "Don"
    },
    {
      email: "user10@email.com",
      password: "password",
      username: "Jessica"
    }
  ];
  const result = await db("users").insert(seeds);
  console.log(result);
})();
