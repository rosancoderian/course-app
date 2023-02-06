migrate(
  (db) => {
    const collection = new Collection({
      id: 'wr2pm022rvrmxm3',
      created: '2023-02-05 17:43:01.497Z',
      updated: '2023-02-05 17:43:01.497Z',
      name: 'enrollment',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'cfypgiaz',
          name: 'user_id',
          type: 'relation',
          required: true,
          unique: false,
          options: {
            collectionId: '_pb_users_auth_',
            cascadeDelete: false,
            maxSelect: 1,
            displayFields: [],
          },
        },
        {
          system: false,
          id: 'vkua4dar',
          name: 'course_id',
          type: 'relation',
          required: true,
          unique: false,
          options: {
            collectionId: '12anh50f7ygbjv5',
            cascadeDelete: false,
            maxSelect: 1,
            displayFields: [],
          },
        },
        {
          system: false,
          id: 'nrzdkhkq',
          name: 'is_completed',
          type: 'bool',
          required: false,
          unique: false,
          options: {},
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
    const collection = dao.findCollectionByNameOrId('wr2pm022rvrmxm3')

    return dao.deleteCollection(collection)
  }
)
