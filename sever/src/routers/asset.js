const express = require('express');
const router = express.Router();
const {createAsset, soldAssets, getAllAssets} = require('../controllers/assestsController'); 
const auth = require('../middleware/auth');

router.post('/create', createAsset);
router.post('/purchase',auth, soldAssets);
router.get('/getAllAssets', getAllAssets);
module.exports = router;