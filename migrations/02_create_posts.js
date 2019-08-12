exports.up = function(knex) {
  return knex.schema.createTable("posts", t => {
    t.increments().index();
    t.text("user_name");
    t.foreign("user_name")
      .references("username")
      .inTable("users");
    t.text("user_email");
    t.foreign("user_email")
      .references("email")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
