// créer une collection

db.createCollection('students')

db.students.insertOne({
    name: 'LY',
    first_name: 'Khun'
})

db.students.insertOne({
    last_name : 'Morre',
    first_name: 'Thierry',
    email: 'lykhun@gmail.com',
    genre: 'M'
})

// supprimer une collection
db.students.drop()

// créer une collection avec un schema de validation
const studentSchema = {
    type: 'object',
    required: ['last_name', 'first_name', 'email'],
    properties: {
        last_name: { type: 'string' },
        first_name: { type: 'string' },
        email: { type: 'string' }
    }
}
db.createCollection('students', {
    validator: {
        $jsonSchema: studentSchema
    }
})




