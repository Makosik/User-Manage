const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api', userRoutes); // '/api' для всех роутов пользователя

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
