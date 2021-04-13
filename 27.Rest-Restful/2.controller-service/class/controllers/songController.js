const Song = require("../models/songModel");

const getAllSongs = async (req, res) => {
	try {
		const results = await Song.getAll();

		res.status(200).json(results);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const getById = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await Song.getById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
		res.status(500).json({ message: err.message });
  }
}

const createSong = async (req, res) => {
  try {
    const { name, album } = req.body;
    const result = await Song.createSong(name, album);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
		res.status(500).json({ message: err.message });
  }
}

const updateSong  = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, album } = req.body;
    const result = await Song.updateSong(id, name, album);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
		res.status(500).json({ message: err.message });
  }
}

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Song.deleteSong(id);
    res.status(204).json(result);
  } catch (error) {
    console.log(error);
		res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllSongs,
  getById,
  createSong,
  updateSong,
  deleteSong
};
