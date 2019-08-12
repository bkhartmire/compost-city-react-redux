exports.up = function(knex) {
  return knex.schema.createTable("users", t => {
    t.increments().index();
    t.string("username")
      .notNullable()
      .unique();
    t.string("email")
      .notNullable()
      .unique();
    t.string("password").notNullable();
    t.string("zip_code").notNullable();
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
