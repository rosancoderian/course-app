migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2pm022rvrmxm3")

  collection.listRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2pm022rvrmxm3")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
