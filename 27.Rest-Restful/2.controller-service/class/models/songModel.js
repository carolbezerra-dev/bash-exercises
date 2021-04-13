const connection = require("../connection");

const { ObjectId } = require("mongodb");

const getAll = async () =>
	connection()
        .then((db) => db.collection("songs").find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection().then((db) => db.collection("songs").findOne(ObjectId(id)));
}

const createSong = async (name, album) => {
  const song = await connection().then((db) => db.collection("songs").insertOne({name, album}));
  
  return { _id: song.insertedId, name, album};
}

const updateSong = async (id, name, album) => {
  if (!ObjectId.isValid(id)) return null;
  
  const updated = await connection().then((db) => {
    const songId = new ObjectId(id);
    const newSong = { name, album };
    return db.collection("songs")
      .findOneAndUpdate({ _id: songId }, { $set: newSong }, { returnOriginal: false })
    .then((result) => result.value);
  });
  if (!updated) return null;

  return updated;
}
// pelo que entendi, ao colocar o returnOriginal false, retorno o item já atualizado

/* como o professor fez a parte de Update
const update = async ({ id, name, album }) => {
	if (!ObjectId.isValid(id)) return null;
	const song = await connection().then((db) => db.collection("songs")
		.updateOne({ _id: ObjectId(id) }, { $set: { name, album } }));
	
	return song;
};
*/

const deleteSong = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const deleted = await connection().then((db) => {
    const songId = new ObjectId(id);
    return db.collection("songs").findOneAndDelete({ _id: songId }).then((result) => result.value);
  });
  if (!deleted) return null;

  return deleted;
}
// retorna o item que foi deletado

/* como o professor fez a parte de Delete
const exclude = async (id) => {
	if (!ObjectId.isValid(id)) return null;
	
	return collection().then((db) => {
		return db.collection("songs").deleteOne({ _id: Object(id) });
		});
};
*/

module.exports = {
  getAll,
  getById,
  createSong,
  updateSong,
  deleteSong
};
