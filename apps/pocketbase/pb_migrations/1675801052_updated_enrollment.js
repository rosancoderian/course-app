migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2pm022rvrmxm3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkua4dar",
    "name": "course_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "12anh50f7ygbjv5",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2pm022rvrmxm3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkua4dar",
    "name": "course_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "12anh50f7ygbjv5",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
