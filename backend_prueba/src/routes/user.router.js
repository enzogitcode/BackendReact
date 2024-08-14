import express from 'express'
const router= express.Router()
import UserController from '../controllers/user.controller.js'
const userController= new UserController()

router.post("/login", userController.login)
router.post("/register", userController.register)
router.get("/profile", userController.profile)

//router.put("/api/users/premium/:uid", userController.changeRole)
// /api/users/premium/:uid

//nueva ruta
router.post("/users/:uid/documents")

export default router