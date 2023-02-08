migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12anh50f7ygbjv5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kh2rta1v",
    "name": "is_published",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("12anh50f7ygbjv5")

  // remove
  collection.schema.removeField("kh2rta1v")

  return dao.saveCollection(collection)
})
