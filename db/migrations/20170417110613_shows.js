
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', function(table) {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('channel').notNullable();
    table.string('genre').notNullable();
    table.boolean('inProduction').notNullable();
  })
  .createTable('favorites', function(table) {
    table.increments();
    table.timestamp('dateAdded').notNullable().defaultTo(knex.fn.now()); // Let knex find the time
    table.integer('show_id').unsigned().references('shows.id');
  })
};

exports.down = function(knex, Promise) {
  // put favs in front of shows later, bro
  return knex.schema.dropTable('favorites').dropTable('shows');
  // return knex.dropTable('shows').dropTable('favorites');
};
