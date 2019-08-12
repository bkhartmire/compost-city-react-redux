const db = require("../server/knex.js");

(async () => {
  const seeds = [
    { email: "user1@email.com", username: "Jane", zip_code: "90019" },
    { email: "user2@email.com", username: "Sam", zip_code: "91505" },
    { email: "user3@email.com", username: "Yuki", zip_code: "90012" },
    { email: "user4@email.com", username: "Maria", zip_code: "91350" },
    { email: "user5@email.com", username: "Jon", zip_code: "91351" },
    { email: "user6@email.com", username: "Tanaka", zip_code: "90064" },
    { email: "user7@email.com", username: "Haruto", zip_code: "90018" },
    { email: "user8@email.com", username: "Austin", zip_code: "90038" },
    { email: "user9@email.com", username: "Don", zip_code: "91504" },
    { email: "user10@email.com", username: "Jessica", zip_code: "91606" }
  ];
  const result = await db("users").insert(seeds);
  console.log(result);
})();
