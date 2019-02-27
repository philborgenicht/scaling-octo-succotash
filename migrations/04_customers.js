exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
    table.increments('id')

    table.string('firstname').notNullable().defaultTo('')

    table.string('lastname').notNullable().defaultTo('')

    table.string('email').unique().notNullable().defaultTo('')

    table.string('username').unique().notNullable().defaultTo('')

    table.string('phone').notNullable().defaultTo('')

    table.string('favoritePlayer')
    table.foreign('favoritePlayer').references('athletes.name').onDelete('CASCADE')

    table.integer('favoritePlayerId')
    table.foreign('favoritePlayerId').references('athletes.id').onDelete('CASCADE')

    table.string('favoriteTeam')
    table.foreign('favoriteTeam').references('teams.name').onDelete('CASCADE')

    table.integer('favoriteTeamId')
    table.foreign('favoriteTeamId').references('teams.id').onDelete('CASCADE')

    table.string('favoriteSport')
    table.foreign('favoriteSport').references('sports.name').onDelete('CASCADE')

    table.integer('favoriteSportId')
    table.foreign('favoriteSportId').references('sports.id').onDelete('CASCADE')

    table.boolean('isActive').notNullable().defaultTo(true)

    table.boolean('isAdmin').defaultTo(false)

    table.string('hashedPassword').unique().notNullable().defaultTo('')


    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
}
