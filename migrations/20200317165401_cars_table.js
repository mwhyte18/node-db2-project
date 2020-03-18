exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("VIN", 100).notNullable();
    tbl
      .string("make", 200)
      .notNullable()
      .index();
    tbl.string("model", 200).notNullable();
    tbl.string("mileage", 100).notNullable();
    tbl.boolean("isAutomatic");
    tbl.boolean("titleIsClean");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
