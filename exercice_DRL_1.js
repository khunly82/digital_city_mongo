db.movies.find({/* match */}, {/* projection */})

db.movies.find({
    year: 1994
}, {
    title: 1,
    year: 1,
    computedProperty: { $size: ['$actors'] },
    computedProperty2 : { $concat: [ 'toto', '$title' ] }
}).sort({ computedProperty: 1 })

db.movies.find({/*1*/}, {/*5*/})
    .sort({/*2*/})
    .skip(/*3*/)
    .limit(/*4*/)

// 1
db.movies.find()
    .sort({ score: -1 })
    .limit(10)

// 2
db.movies.find()
    .sort({ score: -1 })
    .skip(10)
    .limit(10)

// 3
db.movies.find({
    rating: 3
}, {
    title: 1,
    rating: 1
})

// 4
db.movies.find(
    { year: { $gte: 1990, $lt: 2000 } },
    { title: 1, year: 1 }
)
//5
db.movies.find({
    genre: /horror/i,
    year: { $gte: 2000 }
}, { title: 1, genre: 1 })

// 6
db.movies.find({
    actors: /^tom hanks$/i
}, { title: 1, year: 1 }).sort({ year: 1 })

// 7
db.movies.find({
    genre: 'Adventure',
    year: { $gte: 2000, $lt: 2010 },
}, {
    title: 1,
    nbActors: { $size: ['$actors'] }
}).sort({ rating: 1 })

// 8
db.movies.find({
    actors: { $size : 5 }
}, {
    title: 1, actors: 1
})

// 9
db.movies.find({
    //nbActors: { $gt: 5 }
    $expr: { $gt: [{ $size: ['$actors'] }, 5] }
}, {
    title: 1,
    nbActors: { $size: ['$actors'] }
})

// 10
db.movies.countDocuments({
    $or: [
        {genre: 'Horror'},
        {genre: 'Comedy'}
    ]
})
db.movies.countDocuments({ genre: { $in: ['Horror', 'Comedy'] } })
db.movies.countDocuments({ genre: { $all: ['Horror', 'Comedy'] } })

// 11
db.movies.countDocuments({
    title: /christmas/i
})

// 12
db.movies.find({
    genre: { $in: ['Horror', 'Comedy'] },
    year: { $gte: 1990, $lt: 2000 }
}, {
    title: 1,
    actors5: { $slice: [
        { $sortArray: { sortBy: 1, input: '$actors' } },
        5
    ] },
})