const express = require('express')
const { getAllJob, createJob, getJob, deleteJob, updateJob } = require('../controllers/jobs')
const router = express.Router()


router.route('/').get(getAllJob).post(createJob)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)


module.exports = router;