
const mockUsers = [
  {
    username: "Greg",
    password: "password"
  },
  {
    username: "Ashley",
    password: "password"
  },
  {
    username: "Megan",
    password: "password"
  }
];

exports.seed = function(knex) {
  return knex('users').del()
  .then(() => knex('projects').del())
  .then(() => knex('palettes').del())
    .then(function () {
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
