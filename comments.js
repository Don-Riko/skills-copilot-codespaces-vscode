// Create web server
// ------------------------------

// Import dependencies
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create routes
router.get('/comments', commentController.getComments);
router.post('/comments', commentController.addComment);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

// Export routes
module.exports = router;