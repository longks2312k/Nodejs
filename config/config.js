var mongoose = require('mongoose');

const url = 'mongodb+srv://hunao2312000:anhlong2000@dbcoffee.gzwje.mongodb.net/dbCoffee?retryWrites=true&w=majority';

const dbconfig = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log('Server connected ' + conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = dbconfig;
