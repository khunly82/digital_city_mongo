db.restaurants.find({
    'address.zipcode': '10462'
})

db.restaurants.createIndex({
    'address.coord': '2dsphere'
})
db.restaurants.find({
    'address.coord': { $near: {
        $geometry: {
            type: 'Point',
            coordinates: [-74, 40.5]
        },
        $maxDistance: 9000
    } }
})

db.movies.aggregate([
    // pipeline
    { //etape1 },
    { //etape2 },
    { //etape3 },
    { //etape4 },
])

db.movies.find(
    { nbActors: { $gt: 5 } },
    { title: 1, nbActors: { $size: '$actors' } }
)

db.movies.aggregate([
    { $project: { title: 1, nbActors: { $size: '$actors' } } },
    { $match: { nbActors: { $gt: 5 } } },
    { $sort: { nbActors: -1 } },
    { $limit: 10 },
])

db.movies.aggregate([
    { $match: { genre: 'Comedy' } },
    { $sample: { size: 20 } },
    { $project: { title: 1 } }
])

db.movies.aggregate([
    { $addFields: { nbActors: { $size: '$actors' } } }
])

db.movies.aggregate([
    { $group: {
//      _id: '$year',
//      _id: null,
        _id: { year: '$year', rating: '$rating' },
        moyenne: { $avg: '$score' },
        nbMovies: { $count: {} },
        titles: { $push: '$title' },
        top5: { $topN: { output: '$title', sortBy: { rating: -1 }, n: 5 } }
        }
    }, { $sort: { _id: 1 } }
])

db.movies.aggregate([
    //{ $unwind: '$genre' },
    { $group: {
        _id: '$genre',
        nb_movies: { $count: {} }
    }}
])