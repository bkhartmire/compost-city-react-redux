exports.up = function(knex) {
  return knex.schema.createTable("matches", t => {
    t.increments().index();

    t.integer("post_id");
    t.foreign("post_id")
      .references("id")
      .inTable("posts");

    t.integer("user_id");
    t.foreign("user_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("matches");
};
