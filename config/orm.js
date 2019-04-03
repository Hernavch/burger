var connection = require("./connection.js");


var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function() {
    var queryString = "INSERT INTO burgers VALUES ? ";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function() {
    var queryString =
      "UPDATE" + table ;

    connection.query(
      queryString,
      [tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
