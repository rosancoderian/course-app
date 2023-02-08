migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5kyomiz",
    "name": "media",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 200000000,
      "mimeTypes": [
        "video/mp4",
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
  collection.schema.removeField("t5kyomiz")

  return dao.saveCollection(collection)
})
