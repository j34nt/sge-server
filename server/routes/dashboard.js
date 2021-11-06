// Rutas de Dashboard
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// router.get('/', entradaController.getEntradas);
router.get('/get_lines', dashboardController.getLines);
router.post('/add_notification', dashboardController.addNotification);
router.get('/get_notification_line', dashboardController.getNotificationByLine);

module.exports = router;