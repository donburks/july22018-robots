
exports.up = function(knex, Promise) {
  return knex.schema.createTable('robots', t => {
    t.increments();

   //fill in table 
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('robots'); 
};
