const express = require('express')
const authMiddleware = require('../Middlewares/auth.middleware')
const interviewRouter = express.Router()
const interviewController = require('../controllers/interview.controller')
const upload = require('../Middlewares/file.middleware')
/***
 * @route POST /api/interview
 * @description generate new interview report on the basis of user self description, resume pdf and job description
 * @access PRIVATE
 */

interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterViewReportController)
module.exports = interviewRouter