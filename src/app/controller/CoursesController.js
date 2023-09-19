const Courses = require("../model/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CoursesController {
  // GET /course/:slug
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // GET /course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // GET /course/:id/edit
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // POST /course/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKMRzmiR1MDTSuoE3u-pPTM0yghg`;

    const course = new Courses(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  // PUT /course/:id
  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/store/courses"))
      .catch(next);
  }

  // DELETE /course/:id
  destroy(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CoursesController();
