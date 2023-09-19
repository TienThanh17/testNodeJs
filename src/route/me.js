var express = require('express')
var router = express.Router();

const meController = require('../app/controller/meController')


router.get('/store/courses', meController.storedCourses)

module.exports = router


