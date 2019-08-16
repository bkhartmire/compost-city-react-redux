const db = require("../server/knex.js");
const bcrypt = require("bcryptjs");

(async () => {
  const seeds = [
    {
      email: "user1@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Jane"
    },
    {
      email: "user2@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Sam"
    },
    {
      email: "user3@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Yuki"
    },
    {
      email: "user4@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Maria"
    },
    {
      email: "user5@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Jon"
    },
    {
      email: "user6@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Tanaka"
    },
    {
      email: "user7@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Haruto"
    },
    {
      email: "user8@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Austin"
    },
    {
      email: "user9@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Don"
    },
    {
      email: "user10@email.com",
      password: bcrypt.hashSync("password", bcrypt.genSaltSync(8)),
      username: "Jessica"
    }
  ];
  const result = await db("users").insert(seeds);
  console.log(result);
})();
