# DDL

- Créer une collection

```js
db.createCollection('<collectionName>')
```

- Créer une collection avec schema de validation

```js
const validationSchema = {
    /* ... */
}

db.createCollection('<collectionName>', {
    validator: {
        $jsonSchema: validationSchema
    }
})
```

- Supprimer une collection

```js
db.<collectionName>.drop()
```

## Validation

### string

```js
{ type: 'string' }
// ou
{ bsonType: 'string' }
```

- minLength / maxLength

```js
{ type: 'string', minLength: 2, maxLength: 100 }
```

- pattern
```js
{ type: 'string', pattern: '<regex>' }
```

### numeric

```js
{ type: 'number' } // float
// ou
{ bsonType: 'int' } // integers
```

- minimum, exclusiveMinimum, maximum, exclusiveMaximum

```js
{ type: 'number', minimum: 0, exclusiveMaximum: 10 }
```

### date

```js
{ bsonType: 'date' }
```

### enum

```js
{ enum: ['value1', 'value2', /* ... */] }
```

### array

```js
{ type: 'array' }
// ou
{ bsonType: 'array' }
```

- items

```js
{ type: 'array', items: { type: 'string' } }
```

- uniqueItems
```js
// les éléments de la liste devront être tous différents
{ type: 'array', uniqueItems: true }
```

- minItems / maxItems
```js
// devra contenir au moins ...
{ type: 'array', minItems: 2 }
```

### object

```js
{ type: 'object' }
// ou
{ bsonType: 'object' }
```

- required
```js
{ type: 'object', required: ['prop1', 'prop2', /* ... */] }
```

- properties
```js
{ type: 'object', properties: {
    prop1 : { type: ... },
    prop2 : { type: ... }
} }
```
