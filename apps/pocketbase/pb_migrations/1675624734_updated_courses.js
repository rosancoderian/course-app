migrate(
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('12anh50f7ygbjv5')

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: 'uionqdbs',
        name: 'image',
        type: 'file',
        required: false,
        unique: false,
        options: {
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/jpeg', 'image/png'],
          thumbs: [],
        },
      })
    )

    return dao.saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('12anh50f7ygbjv5')

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: 'uionqdbs',
        name: 'image',
        type: 'file',
        required: true,
        unique: false,
        options: {
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: [],
          thumbs: [],
        },
      })
    )

    return dao.saveCollection(collection)
  }
)
