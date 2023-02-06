migrate(
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('wr2pm022rvrmxm3')

    collection.listRule =
      '@request.auth.id != "" && @request.auth.id = @collection.enrollment.user_id'
    collection.viewRule =
      '@request.auth.id != "" && @request.auth.id = @collection.enrollment.user_id'
    collection.updateRule =
      '@request.auth.id != "" && @request.auth.id = @collection.enrollment.user_id'
    collection.deleteRule =
      '@request.auth.id != "" && @request.auth.id = @collection.enrollment.user_id'

    return dao.saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('wr2pm022rvrmxm3')

    collection.listRule = null
    collection.viewRule = null
    collection.updateRule = null
    collection.deleteRule = null

    return dao.saveCollection(collection)
  }
)
