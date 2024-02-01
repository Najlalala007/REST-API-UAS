const express = require('express');
const app = express();
const router = express.Router();
const lagukuController = require('../controller/lagukuController');

// Example usage for laguku route
router.get('/laguku', lagukuController.getAlllaguku);
router.get('/laguku/:id', lagukuController.getSongById);
router.post('/laguku', lagukuController.addSong);
router.put('/laguku/:id', lagukuController.updateSong);
router.delete('/laguku/:id', lagukuController.deleteSong);

module.exports = router;
