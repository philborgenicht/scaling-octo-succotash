
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, firstname: 'Phillip', lastname: 'Borgenicht', email:'philborgenicht@gmail.com', username:'philborg',
        phone:'908-268-8456', favoritePlayer:'Lebron James', favoritePlayerId:1, favoriteTeam:'Los Angeles Lakers', favoriteTeamId:1, favoriteSport:'Basketball',
        favoriteSportId:1, isActive:true, isAdmin:true, hashedPassword:'abcdefg1234567' },

        {id: 2, firstname: 'Marc', lastname: 'Wilk', email:'marcwilk@gmail.com', username:'markymarc',
        phone:'555-555-5555', favoritePlayer:'Von Miller', favoritePlayerId:2, favoriteTeam:'Denver Broncos', favoriteTeamId:2, favoriteSport:'Football',
        favoriteSportId:2, isActive:true, isAdmin:false, hashedPassword:'hijklmn2345678' },

        {id: 3, firstname: 'Owen', lastname: 'Thompson', email:'ot@gmail.com', username:'otonomy',
        phone:'444-444-4444', favoritePlayer:'Nolan Arenado', favoritePlayerId:3, favoriteTeam:'Colorado Rockies', favoriteTeamId:3, favoriteSport:'Baseball',
        favoriteSportId:3, isActive:true, isAdmin:false, hashedPassword:'opqrstu3456789' },

        {id: 4, firstname: 'Justin', lastname: 'Roberts', email:'jrob@gmail.com', username:'jayrobby',
        phone:'333-333-3333', favoritePlayer:'Henrik Lundqvist', favoritePlayerId:4, favoriteTeam:'New York Rangers', favoriteTeamId:4, favoriteSport:'Hockey',
        favoriteSportId:4, isActive:true, isAdmin:false, hashedPassword:'vwxyzab4567890' },

      ])
      .then(() => {
        return knex.raw("SELECT setval('customers_id_seq', (SELECT MAX(id) FROM customers))")
      })
    })
}
