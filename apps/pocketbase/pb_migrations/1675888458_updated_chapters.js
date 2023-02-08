migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mrdga6n9",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // remove
  collection.schema.removeField("mrdga6n9")

  return dao.saveCollection(collection)
})
