migrate(
  (db) => {
    const collection = new Collection({
      id: '12anh50f7ygbjv5',
      created: '2023-02-05 17:40:47.346Z',
      updated: '2023-02-05 17:40:47.346Z',
      name: 'courses',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'mcyb6g4y',
          name: 'title',
          type: 'text',
          required: true,
          unique: false,
          options: {
            min: null,
            max: 255,
            pattern: '',
          },
        },
        {
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
        },
      ],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    })

    return Dao(db).saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('12anh50f7ygbjv5')

    return dao.deleteCollection(collection)
  }
)
