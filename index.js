const mongoose = require('mongoose');
const dishes = require("./Models/Dishes");

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected to MongoDB successefully');

    var firstDish = dishes({
        name: "Pizza",
        description: "Dummy data for test"
    });

    firstDish.save()
    .then((dish) =>{
        console.log(`Successefully added ${dish}`);

        return dishes.find({});
    })
    .then((collection) => {
        console.log(`The dishes data is ${collection}`);

        // for(const dish of dishes){
        //     dishes.remove(dish);
        // }
        return dishes.deleteMany({}); 
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((error) => {
        console.log(`ERROR: ${error}`);
    });
});