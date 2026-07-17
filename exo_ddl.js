const simpleColorSchema = {
    bsonType: 'int',
    minimum: 0,
    maximum: 255
}
const colorsSchema = {
    type: 'object',
    required: ['red', 'green', 'blue'],
    properties: {
        red: simpleColorSchema,
        green: simpleColorSchema,
        blue: simpleColorSchema,
        alpha: {
            type: 'number',
            minimum: 0,
            maximum: 1
        }
    }
}
db.createCollection('colors', {
    validator: {
        $jsonSchema: colorsSchema
    }
}

const authorsSchema = { type: 'object', required: ['name', 'first_name'],
    properties: {
        name: { type: 'string' },
        first_name: { type: 'string' },
    }
}

const booksSchema = {
    type: 'object',
    required: ['title', 'genres', 'isbn', 'author'],
    properties: {
        title: { type: 'string', minLength: 2 },
        genres: { type: 'array', items: {
            enum: ['Adventure', 'Thriller', 'Sci-fi']
        }, uniqueItems: true, minItems: 1 },
        isbn: { type: 'string', pattern: '^[0-9]{13}$' },
        author: authorsSchema
    }
}

db.createCollection({ validator: { $jsonSchema: booksSchema } })