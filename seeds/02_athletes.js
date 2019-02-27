
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('athletes').del()
    .then(function () {
      // Inserts seed entries
      return knex('athletes').insert([
        {id: 1, name:'Lebron James', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Forward', onTeam:false},
        {id: 2, name:'Von Miller', sport:'Football', sportId:2, teamId:2, teamName:'Denver Broncos', position:'Linebacker', onTeam:false},
        {id: 3, name:'Nolan Arenado', sport:'Baseball', sportId:3, teamId:3, teamName:'Colorado Rockies', position:'Third Baseman', onTeam:false},
        {id: 4, name:'Henrik Lundqvist', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Goaltender', onTeam:false},

      ])
      .then(() => {
        return knex.raw("SELECT setval('athletes_id_seq', (SELECT MAX(id) FROM athletes))")
      })
    })
}
