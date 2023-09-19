const Course = require('../model/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    //GET /
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', { courses })
            })
            .catch(next)
    }

    //GET /search
    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController;