const express = require("express");
const router = express.Router();
const controller = require("../controllers");


router.get('/',controller.getStudents);

router.get('/:id',controller.getStudent);

router.get('/department/:department',controller.searchDepartment);

router.post('/',controller.createStudent);

router.delete('/:id',controller.removeStudent);

module.exports = router;

