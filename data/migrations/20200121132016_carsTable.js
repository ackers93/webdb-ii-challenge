exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("vin", 128)
      .unique()
      .notNullable();
    tbl
      .text("make", 128)
      .index()
      .notNullable();
    tbl
      .text("model", 128)
      .index()
      .notNullable();
    tbl.integer("mileage", 128).notNullable();
    tbl.text("transmission", 128).index();
    tbl.text("status", 128).index();
  });
};

exports.down = function(knex) {};
