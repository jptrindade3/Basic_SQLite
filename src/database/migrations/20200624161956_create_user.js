// Onde encontrar as funções utilizadas aqui (tópico SchemaBuilder) http://knexjs.org/#Schema-primary
exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.string('id').primary().unique();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('phone').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
