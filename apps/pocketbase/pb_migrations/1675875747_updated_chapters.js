migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // remove
  collection.schema.removeField("epe7huhv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "53otrqkt",
    "name": "attachment",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uz4hvegft5cyczm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epe7huhv",
    "name": "video",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 200000000,
      "mimeTypes": [
        "video/mp4",
        "video/webm",
        "image/png",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  // remove
  collection.schema.removeField("53otrqkt")

  return dao.saveCollection(collection)
})
