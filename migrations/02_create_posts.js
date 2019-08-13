exports.up = function(knex) {
  return knex.schema.createTable("posts", t => {
    t.increments().index();
    t.text("user_name");
    t.string("zip_code").notNullable();
    t.foreign("user_name")
      .references("username")
      .inTable("users");
    t.text("user_email");
    t.foreign("user_email")
      .references("email")
      .inTable("users");
    t.boolean("food_scraps").defaultTo(false);
    t.boolean("human_or_animal_waste").defaultTo(false);
    t.boolean("bokashi").defaultTo(false);
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
