const database = require ('../../Util/connection/conecctionDB'); 

const getVideoBySlabId = async(req, res) =>{
    try{
        const rows = await database.query('select * from videos where slabId = ' + req.params.id)
        return res.json({
            code: 1,
            msg: 'successful',
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

const getVideoById = async(req, res) => {
    try{
        const rows = await database.query('select * from videos where id = ' + req.params.id)
        return res.json({
            code: 1,
            msg:'successful',
            data: rows
        })
    }catch(err){
        return res.json({
            code: 2,
            msg: 'error',
            data: error.message
        })
    }
}

module.exports = {
    getVideoBySlabId,
    getVideoById
};