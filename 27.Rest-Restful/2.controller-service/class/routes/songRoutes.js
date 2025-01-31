const express = require('express');
const songController = require('../controllers/songController');

const router = express.Router();

router.get('/songs', songController.getAllSongs);
router.get('/songs/:id', songController.getById);
router.post('/songs', songController.createSong);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);

module.exports = router; 
