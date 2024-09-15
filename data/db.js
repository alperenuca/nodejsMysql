const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if(err) {
        console.log(err);
    }

    console.log("Bağlantı %100 Tamamlandı"); //MySql bağlantısı sağlanırsa terminalde bu metni gösterecek.
});

module.exports = connection.promise();