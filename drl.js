// SELECT * FROM movies
db.movies.find()

// SELECT TOP 1 * FROM movies
db.movies.findOne()

// SELECT COUNT(*) FROM movies
db.movies.countDocuments()

// SELECT * FROM movies WHERE year = 1994
db.movies.find({
    //year: { $eq: 1994 }
    year: 1994
})

// SELECT * FROM movies WHERE year = 1994 AND genre = 'Horror'
db.movies.find({
    year: 1994,
    genre: 'Horror'
})

// SELECT * FROM movies WHERE year > 1994 AND year < 2000
db.movies.find({
    year: { $gt: 1994, $lt: 2000 },
})

// SELECT title, year FROM movies
db.movies.find({}, {
    title: 1,
    year: 1,
    _id: 0
})

db.movies.find({}, { actors: 0, rating: 0 })

// SELECT * FROM movies
// ORDER BY year
db.movies.find()
    .sort({ year: 1 }).skip(10).limit(10)

