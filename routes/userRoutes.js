const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUsers); //Получение списка пользователей
router.post('/users', createUser);// Создание нового пользователя
router.put('/users/:id', updateUser);//Обновление информации о пользователе
router.delete('/users/:id', deleteUser);//Удаление пользователя

module.exports = router;