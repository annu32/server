const express=require('express')
const ContactController = require('../controller/ContactController')
const teacherController = require('../controller/teacherController')
const CourseController=require('../controller/CourseController')
const UserController=require('../controller/userController')
const checkauth=require('../middleware/auth')
const router=express.Router()


//contact
router.get('/contact',ContactController.display)
router.post('/create',ContactController.create)
router.get('/view/:id',ContactController.view)
router.put('/update/:id',ContactController.update)
router.delete('/delete/:id',ContactController.delete)

///teacher
router.get('/teacher',teacherController.display)
// router.post('/teachercreate',teacherController.create)
// router.get('/view/:id',teacherController.view)


//course
router.get('/course',CourseController.display)
router.post('/course/create',CourseController.create)
router.get('/course/view/:id',CourseController.view)
router.put('/course/update/:id',CourseController.update)
router.delete('/course/delete/:id',CourseController.delete)

//user

 router.post('/register',UserController.register)
 router.post('/login',UserController.login)
 router.get('/profile',checkauth,UserController.profile)
 router.get('/logout',UserController.logout)




module.exports=router