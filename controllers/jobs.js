const Job = require("../models/Job")
const {StatusCodes} = require('http-status-codes')



const getAllJob = async (req,res) => {
    res.send('getAllJob')
}
const getJob = async (req,res) => {
    res.send('getJob')
}


const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}


const deleteJob = async (req,res) => {
    res.send('deleteJob')
}
const updateJob = async (req,res) => {
    res.send('updateJob')
}


module.exports = {
    getAllJob,getJob,createJob,deleteJob,updateJob,
}