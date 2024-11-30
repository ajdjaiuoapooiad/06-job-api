const getAllJob = async (req,res) => {
    res.send('getAllJob')
}
const getJob = async (req,res) => {
    res.send('getJob')
}
const createJob = async (req,res) => {
    res.send('createJob')
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