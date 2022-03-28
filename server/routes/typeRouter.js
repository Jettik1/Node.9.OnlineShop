const Router = require('express');
const typeController = require('../controllers/typeController');
const router = new Router();
const checkRoles = require('../middleware/checkRole')


router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router