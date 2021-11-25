const database = require('../../Util/connection/conecctionDB')

const getSlabs = async (req, res) => {
    try {
        const rows = await database.query('select * from slabs')
        return res.json({
            code: 1,
            msg: 'succesful',
            data: rows
        })
    } catch (err) {
        return res.json({
            code: 2,
            msg: 'error',
            data: error.message
        })
    }
}

const getSlabsByCourseId = async (req, res) => {
    try {
        const arraySlabs = []
        const slabs = await database.query('select distinct * from slabs where courseId = ' + req.params.id)
        for (const slab of slabs) {
            const activities =
                await database.query(
                    'select a.* from slabs s, activities a where s.courseId = ' +
                    req.params.id +
                    ' and a.slabId = s.id and a.slabId = ' +
                    slab.id
                ) 

            const autoevaluation =
                await database.query(
                    'select a.* from slabs s, autoevaluation a where s.courseId = ' +
                    req.params.id +
                    ' and a.slabId = s.id and a.slabId = ' +
                    slab.id
                )
            arraySlabs.push({
                slab: slab,
                activities: activities,
                autoevaluation: autoevaluation
            })
        }

        return res.json({
            code: 1,
            msg: 'successful',
            data: arraySlabs
        })
    } catch (err) {
        return res.json({
            code: 2,
            msg: 'error',
            data: error.message
        })
    }
}

const getSlabById = async (req, res) => {
    try {
        const rows = await database.query('select * from slabs where id = ' + req.params.id)
        return res.json({
            code: 1,
            msg: 'succesful',
            data: rows
        })
    } catch (err) {
        return res.json({
            code: 2,
            msg: 'error',
            data: error.message
        })
    }
}

module.exports = {
    getSlabs,
    getSlabsByCourseId,
    getSlabById
};

