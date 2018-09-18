
exports.up = function(knex, Promise) {
      return Promise.all([
        knex.schema.table('milestones', function(table) {
            table.integer('famous_person_id')
            .references('id')
            .inTable('milestones');

        })
    ])
};

exports.down = function(knex, Promise) {

};