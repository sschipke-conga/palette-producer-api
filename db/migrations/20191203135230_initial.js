
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("users", function (table) {
      table.increments("id").primary();
      table.string("username").unique();
      table.string("password");
      table.timestamps(true, true);
    }),

    knex.schema.createTable("projects", function (table) {
      table.increments("id").primary();
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.string("name");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("palettes", function (table) {
      table.increments("id").primary();
      table.integer("project_id").unsigned();
      table.foreign("project_id").references("projects.id")
      .onDelete('CASCADE');
      table.string("name");
      table.string("color1", 7);
      table.string("color2", 7);
      table.string("color3", 7);
      table.string("color4", 7);
      table.string("color5", 7);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("palettes"),
    knex.schema.dropTable("projects"),
    knex.schema.dropTable("users")
  ]);
};
