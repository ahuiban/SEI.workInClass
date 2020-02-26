const mongoose = require("mongoose");
const Tweet = require("./tweet");
const mongoURI = "mongodb://localhost:27017/tweets";
const db = mongoose.connection;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));
db.on("open", () => {
    console.log("Connection made!");
});

Tweet.create({
    title: "Deep Thoughts",
    body: "A peanut is neither a pea or a nut",
    author: "Zeb"
},
    (error, tweet) => {
        if (error) {
            console.log(error);
        } else {
            console.log(tweet);
        }
        db.close();
    }
);


const manyTweets = [
    {
        title: 'Deep Thoughts',
        body: 'A peanut is neither a pea nor a nut',
        author: 'Zeb'
    },
    {
        title: 'Sage Advice',
        body: 'Friends, I am vegan and so should you',
        author: 'Karolin',
        likes: 20
    },
    {
        title: 'Whole Reality',
        body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
        author: 'Karolin',
        likes: 40
    },
    {
        title: 'Organic',
        body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
        author: 'Karolin',
        likes: 162
    },
    {
        title: 'Confusion',
        body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
        likes: 1
    },
    {
        title: 'Vespa',
        body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
        author: 'Karolin',
        likes: 2
    },
    {
        title: 'Licensed',
        body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
        author: 'Karolin',
        likes: 3
    },
    {
        title: 'Water',
        body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
        author: 'Karolin',
    },
];

//Let's insert all these tweets:
Tweet.insertMany(manyTweets, (error, tweets) => {
    if (error) {
        console.log(error)
    } else {
        console.log(tweets);
    } db.close()
});

//Let's look for a specific tweet:
Tweet.find({ title: "Water" }, (err, tweets) => {
    console.log(tweets);
    db.close()
});

//Let's find the tweets that have 20 or more likes
Tweet.find({ likes: { $gte: 20 } }, (err, tweets) => {
    console.log(tweets);
    db.close();
});


//Delete Documents with Mongoose
Tweet.findOneAndRemove({ title: 'Deep Thoughts' }, (err, tweet) => {
    if (err) {
        console.log(err);
    } else {
        console.log('This is the deleted tweet:', tweet);
    }
    db.close()
})

//Update Documents with Mongoose
Tweet.findOneAndUpdate({ title: 'Vespa' }, { deleted: true }, { new: true }, (err, tweet) => {
    if (err) {
        console.log(err);
    } else {
        console.log(tweet);
    }
    db.close()
})

//This code runs before the database response comes back

// setTimeout(() => {
//     db.close();
// }, 5000);