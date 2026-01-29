const jwt = require('jsonwebtoken')
require('dotenv').config()

const { registrarUsuariosServicios,
    iniciarSesionServicios,
    crearUsuarioServicios,
    mostrarUsuarioServicios,
    eliminarUsuarioServicios,
    actualizarUsuarioServicios } = require('../services/auth.services')

exports.registrarUsuariosController = async (req, res) => {
    try {
        const user = await registrarUsuariosServicios(req.body);
        res.status(200).json({
            msg: 'empresa registrada correctamente',
            usuario: user
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}
exports.iniciarSesionController = async (req, res) => {
    try {
        const user = await iniciarSesionServicios(req.body);
        const token = jwt.sign({
            empresa_id: user.empresa_id,
            // nombre_empresa: user.nombre_empresa,
            admin_empresa: user.admin_empresa,
        }, process.env.JWT_SECRET,
            { expiresIn: '2h' })
        res.status(200).json({
            msg: 'Inicio de sesion exitoso', token
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

exports.crearUsuarioController = async (req, res) => {
    const { empresa_id } = req.user
    try {
        const user = await crearUsuarioServicios(empresa_id, req.body);
        res.status(200).json({
            msg: 'Usuario creado con exito',
            usuario: user
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

exports.mostrarUsuarioController = async (req, res) => {
    const { empresa_id } = req.user
    try {
        const user = await mostrarUsuarioServicios(empresa_id, req.body);
        res.status(200).json({
            msg: 'Usuario mostrados con exito',
            usuarios: user
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

exports.eliminarUsuarioController = async (req, res) => {
    const { id } = req.params
    try {
        const user = await eliminarUsuarioServicios(id)
        res.status(200).json({
            msg: 'Usuario eliminado con exito',
            usuario: user
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.actualizarUsuarioController = async (req, res) => {
    const { id } = req.params
    try {
        const user = await actualizarUsuarioServicios(id, req.body)
        res.status(200).json({
            msg: 'Usuario actualizado con exito',
            user
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}