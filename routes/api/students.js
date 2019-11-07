const router = require("express").Router();
const studentsController = require("../../controller/studentsController");

// Matches with "/api/books"
router.route("/")
    .get(studentsController.findAll)
    .post(studentsController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(studentsController.findById)
    .put(studentsController.update)
    .delete(studentsController.remove);

module.exports = router;
