const req = require('express/lib/request')
const database = require('../../Util/connection/conecctionDB')

const getActivityById = async (req, res) => {
    try {
        const rows = await database.query('select * from activities where id = ' + req.params.id)
        return res.json({
            code: 1,
            msg: 'succesful',
            data: rows
        })
    } catch (err) {
        return res.json({
            code: 1,
            msg: 'error',
            data: error.message
        })
    }
}


const getActivityBySlabId = async (req, res) => {
    try {
        const rows = await database.query('select a.* from slabs s, activities a where a.slabId = s.id and a.slabId = ' + req.params.slabId)
        return res.json({
            code: 1, 
            msg: 'succesful',
            data: rows
        })
    }catch(err){
        return res.json({
            code: 1, 
            msg: 'error', 
            data: error.message
        })
    }
}


module.exports = {
    getActivityById,
    getActivityBySlabId
};

