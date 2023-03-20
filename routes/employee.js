const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');

router.get('/', EmployeeController.index);
router.post('/show', EmployeeController.show);
//router.get('/show/:employeeID', EmployeeController.show);
router.post('/store', EmployeeController.store);
router.put('/update', EmployeeController.update);
router.delete('/delete', EmployeeController.destroy);

module.exports = router;
