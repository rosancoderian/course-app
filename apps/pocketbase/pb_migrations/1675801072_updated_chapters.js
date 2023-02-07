migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7paljbyp",
    "name": "course_id",
    "type": "relation",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7paljbyp",
    "name": "course_id",
    "type": "relation",
    "required": false,
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
