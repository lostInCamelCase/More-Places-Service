const db = require('./index.js')

module.exports = {
  getProperties: function(callback) {
    db.query('select * from properties', (error, response) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, response);
      }
    });
  },

  getLists: function(callback) {
    db.query('select * from lists', (error, response) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, response);
      }
    });
  }
}