const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// POST /user - Create a new user
router.post('/', userController.createUser);

// GET /user - Retrieve all user
router.get('/', userController.getAllUsers);

// GET /user/:id - Retrieve a single user by its ID
router.get('/:id', userController.getUserById);

// PUT /user/:id - Update a user by its ID
router.put('/:id', userController.updateUser);

// DELETE /user/:id - Delete a user by its ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
