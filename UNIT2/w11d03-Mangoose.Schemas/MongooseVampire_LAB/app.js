/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/


Vampire.insertMany(seedData, (err, vampires) => {
  if (err) { console.log(err) }
  console.log("added provided vampire data", vampires)
  mongoose.connection.close();
});


//Add some new vampire data
Vampire.create({
  name: 'X1',
  title: 'noTitle01',
  hair_color: 'gray',
  eye_color: 'red',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Atlanta, Georgia, US',
  gender: 'm',
  victims: 9,
},

  (error, vampire) => {
    if (error) {
      console.log(error);
    } else {
      console.log(vampire);
    }
    db.close();
  }
);