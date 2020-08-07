const db = require('./index.js')


var generator = function () {
  var types = ['Entire place', 'Private room', 'Shared room'];
  var images = ['https://moreplaces.s3-us-west-1.amazonaws.com/image1.jpg','https://moreplaces.s3-us-west-1.amazonaws.com/image2.jpg', 'https://moreplaces.s3-us-west-1.amazonaws.com/image3.jpg', 'https://moreplaces.s3-us-west-1.amazonaws.com/image4.jpg', 'https://moreplaces.s3-us-west-1.amazonaws.com/image5.jpg'];

  var properties = [];
  for (var i = 1; i < 101; i++) {
    var property = {};
    property.name = `place #${i}`,
      property.superhost = Math.floor(Math.random() * 2),
      property.type = types[Math.floor(Math.random() * 3)],
      property.beds = Math.floor(Math.random() * 4),
      property.price = 300 + Math.floor(Math.random() * 200),
      property.rating = 4 + 0.1 * Math.floor(Math.random() * 10),
      property.review_count = 5 + Math.floor(Math.random() * 10),
      property.image = images[Math.floor(Math.random() * 5)],
      property.list = 1 + Math.floor(Math.random() * 2)
    properties.push(property);
  }
  return properties;
};

var seeder = function () {
  var properties = generator();
  //deletes all existing entries in both table, resets id fields to 1
  db.query('DELETE FROM properties;');
  db.query('ALTER TABLE properties AUTO_INCREMENT = 1;');
  db.query('DELETE FROM lists;');
  db.query('ALTER TABLE lists AUTO_INCREMENT = 1;');

  //populates lists table
  db.query(`INSERT INTO lists (name) VALUES ('list1')`);
  db.query(`INSERT INTO lists (name) VALUES ('list2')`);
  db.query(`INSERT INTO lists (name) VALUES ('list3')`);

  //populates properties table
  for (var i = 0; i < properties.length; i++) {
    var current = properties[i]
    db.query(`INSERT INTO properties (name, superhost, type, beds, price, rating, review_count, image, list) VALUES ('${current.name}', ${current.superhost}, '${current.type}', ${current.beds}, ${current.price}, ${current.rating}, ${current.review_count}, '${current.image}', ${current.list});`);
  }
}

seeder();

