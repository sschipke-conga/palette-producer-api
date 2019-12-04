
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("users", function(table) {
      table.increments("id").primary();
      table.string("username");
      table.string("password");
      table.timestamps(true, true);
    }),

    knex.schema.createTable("projects", function(table) {
      table.increments("id").primary();
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.string("name");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("palettes", function(table) {
      table.increments("id").primary();
      table.integer("project_id").unsigned();
      table.foreign("project_id").references("projects.id");
      table.string("name");
      table.string("color1");
      table.string("color2");
      table.string("color3");
      table.string("color4");
      table.string("color5");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("footnotes"),
    knex.schema.dropTable("papers")
  ]);
};
