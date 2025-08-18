const contactmodal = require('../models/contact')
const teachermodal = require('../models/teacher')

class teacherController {
    static display = async (req, res) => {
        try {
            const data_1 = await teachermodal.find()
            res.send(data_1)
        } catch (error) {
            console.log(error)
        }
    }
    static create = async (req, res) => {
        try {
            console.log(req.body)
            const { name } = req.body
            const data = await contactmodal.create({
                name,
            })
            res.json(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    static view = async (req, res) => {
        try {
            const id_t = req.params.id()
            const data_1 = await teachermodal.findById(id_t)
            res.send(data_1)
        } catch (error) {
            console.log(error)
        }
    }

   
}


module.exports = teacherController
