const db = require("../server/knex.js");

(async () => {
  const seeds = [
    {
      user_name: "Jane",
      user_email: "user1@email.com",
      zip_code: "90019"
    },
    {
      user_name: "Sam",
      user_email: "user2@email.com",
      zip_code: "91505",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Yuki",
      user_email: "user3@email.com",
      zip_code: "90012",
      food_scraps: true,
      bokashi: true
    },
    {
      user_name: "Maria",
      user_email: "user4@email.com",
      zip_code: "91350",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Jon",
      user_email: "user5@email.com",
      zip_code: "91351",
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Tanaka",
      user_email: "user6@email.com",
      zip_code: "90064",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Haruto",
      user_email: "user7@email.com",
      zip_code: "90018",
      food_scraps: true,
      human_or_animal_waste: true,
      bokashi: true
    },
    {
      user_name: "Austin",
      user_email: "user8@email.com",
      zip_code: "90038"
    },
    {
      user_name: "Don",
      user_email: "user9@email.com",
      zip_code: "91504",
      food_scraps: true,
      bokashi: true
    },
    {
      user_name: "Jessica",
      user_email: "user10@email.com",
      zip_code: "91606",
      food_scraps: true
    }
  ];
  const result = await db("posts").insert(seeds);
  console.log(result);
})();
