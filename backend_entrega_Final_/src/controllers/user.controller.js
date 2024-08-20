import UserModel from '../models/user.model.js'
import CartModel from '../models/cart.model.js'
import UserRepository from '../repositories/user.repository.js'
const userRepository = new UserRepository()
import CartRepository from '../repositories/cart.repository.js'
const cartRepository = new CartRepository()
import CartController from './cart.controller.js'
const cartController = new CartController()
import { createHash, isValidPassword } from '../utils/hashbcrypt.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
const SECRET = config.SECRET
import { uploader } from '../middleware/multer.js'
/* import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); */


class UserController {
    async register(req, res) {
        let { first_name, last_name, email, age, password, carts, role, documents, last_connection } = req.body
        try {
            const user = await userRepository.getUserByEmail(email)
            if (user) {
                console.log("Ya hay un usuario registrado con ese email")
                return res.status(400).send({ message: "El usuario ya existe" })
            }
            const newCart = new CartModel();
            const newUser = new UserModel({
                carts: newCart._id,
                first_name,
                last_name,
                email,
                age,
                password: createHash(password),
                role,
                documents,
                last_connection
            })
            await newCart.save()
            const userSaved = await newUser.save()
            console.log("Nuevo usuario creado", userSaved)
            const token = jwt.sign(
                { user: userSaved }, //indica que dato quiero guardar
                config.SECRET,
                { expiresIn: "24h" }
            )
            res.cookie("coderCookieToken", token, {
                maxAge: 86400,
                httpOnly: true
            }).redirect('/api/users/profile')

        } catch (error) {
            console.log("Error al registrar el usuario", error)
            res.send(error)
        }
    }
    async login(req, res) {
        let { email, password } = req.body
        try {
            const user = await userRepository.getUserByEmail(email)
            if (!user) {
                console.log("usuario no encontrado")
                res.json("usuario no encontrado")
            }
            const isValid = isValidPassword(password, user);
            if (!isValid) {
                return res.status(401).send("Contraseña incorrecta");
            }
            user.last_connection = new Date()
            const userSaved = await user.save()
            const token = jwt.sign({ user: userSaved }, SECRET, { expiresIn: "24h" })
            res.cookie("coderCookieToken", token, {
                maxAge: 3600000,
                httpOnly: true
            }).redirect('/api/users/profile')
            //este redirect funciona
        } catch (error) {
            res.json(error)
            console.log(error)
        }

    }
    async profile(req, res) {
        try {
            //res.render("profile", { user: req.user.user })
            res.json({ user: req.user.user })

        } catch (error) {
            console.log(error)
        }
    }

    async logout(req, res) {
        const token = req.cookies["coderCookieToken"]
        try {
            if (token) {
                const decoded = jwt.verify(token, SECRET)
                req.user = decoded
                const userId = decoded.user._id
                //actualizar last_connection
                const updatedUser = await UserModel.findByIdAndUpdate(userId)
                updatedUser.last_connection = new Date();
                await updatedUser.save()
            }
            else {
                res.send({ message: "No se encuentra el token" })
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Error interno del servidor");
            return;
        }
        res.clearCookie("coderCookieToken").redirect("/login")
        //esta parte si
    }

    async uploadFiles(req, res) {
        const { uid } = req.params
        //const userId= req.params.uid
        try {
            const user = await UserModel.findByIdAndUpdate(uid)
            if (!user) {
                return res.status(400).send({ status: "error", error: "No existe un usuario con ese Id" })
            }

            if (!req.files) {
                return res.status(400).send({ status: "error", error: "No se pudo guardar la imagen" })
            }
            //const profileArray = { name: (req.files.profile[0].filename), reference: (req.files.profile[0].path) }
            if (req.files.profile) {
                req.files.profile.map(element => {
                    const profileObjects = { name: element.filename, reference: element.path }
                    user.documents.push(profileObjects)
                })
            }
            if (req.files.documents) {
                req.files.documents.map(element => {
                    const documentsObjects = { name: element.filename, reference: element.path }
                    user.documents.push(documentsObjects)
                })
            }
            if (req.files.products) {
                req.files.products.map(element => {
                    const productsObjects = { name: element.filename, reference: element.path }
                    user.documents.push(productsObjects)
                })
            }
            const uniqueObject = {};
            for (const doc of user.documents) {
                const name = doc.name;
                uniqueObject[name] = doc;
            }
            const result = Object.values(uniqueObject);
            user.documents = result
            await user.save()
            res.json(user)

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    async changeRole(req, res) {
        const { uid } = req.params
        try {
            const user = await UserModel.findById({ _id: uid })
            if (!user) {
                console.log("No existe un usuario con ese Id")
                res.send("No existe un usuario con ese Id")
            }
            const docsNames = user.documents.map(
                element => element.name.split('.').slice(0, 1).shift())
            if (docsNames.includes('identificacion' && 'comprobante de domicilio' && 'comprobante de estado de cuenta')) {
const newRole = user.role === 'user' ? 'premium' : 'user'
                const updatedUser = await userRepository.changeRole(uid, newRole);
                console.log(updatedUser)
                res.json(updatedUser);
            }
            else {
                return res.status(400).json({ message: 'El usuario debe cargar los siguientes documentos: Identificación, Comprobante de domicilio, Comprobante de estado de cuenta' });
            }

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await UserModel.find()
            res.json(users)
        } catch (error) {
            res.status(500).send({ message: "No se pueden ver los usuarios" }, error)
        }
    }
    async deleteUser(req, res) {
        const userId = req.params.uid
        try {
            const user = await userRepository.getUserById(userId)
            if (!user) {
                res.json("no existe un usuario con ese id")
            }
            await CartModel.findByIdAndDelete(user.carts.toString())

            const deletedUser = await UserModel.findByIdAndDelete(userId)
            if (!user) {
                res.send({ message: "no existe un user con ese Id" })
            }

            console.log("usuario eliminado con éxito", user, deletedUser, carts)

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    async getUserById(req, res) {
        const { uid } = req.params
        try {
            const user = await userRepository.getUserById({ _id: uid })
            if (!user) {
                res.json("no existe un usuario con ese Id")
            }
            res.json(user)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
    async clearDocs(req, res) {
        const { uid } = req.params
        try {
            const user = await UserModel.findByIdAndUpdate({ _id: uid })
            if (!user) {
                res.json("no existe un usuario con ese Id")
            }
            user.documents = []
            await user.save()
            res.json(user)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
}

export default UserController
