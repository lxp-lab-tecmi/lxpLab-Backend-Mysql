const { response } = require('express')
const { format } = require('mysql')
const database = require('../../Util/connection/conecctionDB')

const getAutovaluationBySlabId = async (req, res) => {
    try {
        const autoevaluations = await database.query('select * from activities where slabId = ' + req.params.id)

        const response = { autoevaluation: autoevaluations, questions: [] }
        for (const autoevaluation of autoevaluations) {
            const questions = await database.query('select * from questionautoevaluation where autoevaluationId = ' + autoevaluation.id)
            for (const question of questions) {
                const answer = await database.query('select * from answerquestionautoevaluation where questionAutoEvaluationId = ' + question.id)
                response.questions.push({ question: question, answers: answer })
            }
            return res.json({
                code: 1,
                msg: 'succesful',
                data: response
            })
        }
    } catch (err) {
        return res.json({
            code: 2,
            msg: 'error',
            data: err.message
        })
    }
}

module.exports = {
    getAutovaluationBySlabId
};

