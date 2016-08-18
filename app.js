var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("GET /");
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'loladmin',
        password: 'SitL0Lpass',
        server: 'lolsitdataserver.database.windows.net', 
        database: 'lolsitdatabase' 
    };

    // connect to your database
    sql.connect("mssql://loladmin:SitL0Lpass@lolsitdataserver.database.windows.net/lolsitdatabase?encrypt=true", function (err) {
        console.log("Connection Started");
        if (err) console.log(err);

		console.log("Connection Done");
        // create Request object
        var request = new sql.Request();
        console.log("Query Started");
        // query to the database and get the records
        request.query('select * from SITTable', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
;
    });
});

app.get('/test', function (req, res) {
   
 res.send("hello");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});