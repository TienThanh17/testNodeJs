const Courses = require("../model/Course");

class MeController {
  // GET /me/store/courses
  storedCourses(req, res, next) {
    Courses.find({})
      .lean()
      .then((courses) => res.render("me/stored-courses", { courses }))
      .catch(next)
  }
}

module.exports = new MeController();
