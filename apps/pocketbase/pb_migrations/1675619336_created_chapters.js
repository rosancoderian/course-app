migrate(
  (db) => {
    const collection = new Collection({
      id: 'uz4hvegft5cyczm',
      created: '2023-02-05 17:48:55.997Z',
      updated: '2023-02-05 17:48:55.997Z',
      name: 'chapters',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'rdapabhg',
          name: 'title',
          type: 'text',
          required: true,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: 'epe7huhv',
          name: 'video',
          type: 'file',
          required: true,
          unique: false,
          options: {
            maxSelect: 1,
            maxSize: 200000000,
            mimeTypes: ['video/mp4', 'video/webm', 'image/png', 'image/jpeg'],
            thumbs: [],
          },
        },
        {
          system: false,
          id: '61gc4zdg',
          name: 'article',
          type: 'editor',
          required: false,
          unique: false,
          options: {},
        },
        {
          system: false,
          id: '7paljbyp',
          name: 'course_id',
          type: 'relation',
          required: false,
          unique: false,
          options: {
            collectionId: '12anh50f7ygbjv5',
            cascadeDelete: false,
            maxSelect: 1,
            displayFields: [],
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
    const collection = dao.findCollectionByNameOrId('uz4hvegft5cyczm')

    return dao.deleteCollection(collection)
  }
)
