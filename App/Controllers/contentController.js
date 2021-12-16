const database = require('../../Util/connection/conecctionDB')

const getContentBySlab = async(req, res) => {
    try{
        const rows = await database.query('select * from content where slabid = ' + req.params.id)
        console.log(rows)

        return res.json({
            code: 1,
            msg: 'successful',
            data: rows
        })
    }catch(err){
        return err.json({
            code: 1,
            msg: 'error',
            data: error.message
        })
    }
}

module.exports = {
    getContentBySlab
}