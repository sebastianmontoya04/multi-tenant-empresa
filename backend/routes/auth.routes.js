const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middlewares/verifyToken')
const { registrarUsuariosController,
    iniciarSesionController,
    crearUsuarioController,
    mostrarUsuarioController,
    eliminarUsuarioController,
    actualizarUsuarioController } = require('../controllers/auth.controller')

router.post('/registrarUsuarios', registrarUsuariosController)
router.post('/iniciarSesion', iniciarSesionController)
router.post('/crearUsuario', authMiddleware, crearUsuarioController)
router.get('/mostrarUsuario', authMiddleware, mostrarUsuarioController)
router.delete('/eliminarUsuario/:id', authMiddleware, eliminarUsuarioController)
router.put('/actualizarUsuario/:id', authMiddleware, actualizarUsuarioController)

module.exports = router