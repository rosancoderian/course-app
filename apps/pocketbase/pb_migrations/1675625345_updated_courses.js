migrate(
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('12anh50f7ygbjv5')

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: 'aa6iw2be',
        name: 'desc',
        type: 'text',
        required: true,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: '',
        },
      })
    )

    return dao.saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('12anh50f7ygbjv5')

    // remove
    collection.schema.removeField('aa6iw2be')

    return dao.saveCollection(collection)
  }
)
