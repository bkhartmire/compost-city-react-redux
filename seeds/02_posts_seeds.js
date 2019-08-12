const db = require("../server/knex.js");

(async () => {
  const seeds = [
    {
      user_name: "Jane",
      user_email: "user1@email.com"
    },
    {
      user_name: "Sam",
      user_email: "user2@email.com",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Yuki",
      user_email: "user3@email.com",
      food_scraps: true,
      bokashi: true
    },
    {
      user_name: "Maria",
      user_email: "user4@email.com",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Jon",
      user_email: "user5@email.com",
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Tanaka",
      user_email: "user6@email.com",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Haruto",
      user_email: "user7@email.com",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Austin",
      user_email: "user8@email.com"
    },
    {
      user_name: "Don",
      user_email: "user9@email.com",
      food_scraps: true,
      bokashi: true
    },
    {
      user_name: "Jessica",
      user_email: "user10@email.com",
      food_scraps: true
    }
  ];
  const result = await db("posts").insert(seeds);
  console.log(result);
})();
