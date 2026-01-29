const bcrypt = require('bcrypt')
const { registrarUsuariosModelos,
    iniciarSesionModelos,
    crearUsuarioModelos,
    mostrarUsuarioModelos,
    eliminarUsuarioModelos,
    actualizarUsuarioModelos } = require('../models/auth.models')

exports.registrarUsuariosServicios = async ({ nombre_empresa, email_empresa, admin_empresa, password_admin }) => {
    //condiciones
    if (!nombre_empresa || !admin_empresa || !email_empresa || !password_admin) {
        throw new Error('El usuario no ha sido registrado')
    }
    //hashear contraseña
    const hashedPassword = await bcrypt.hash(password_admin, 10);
    return await registrarUsuariosModelos(nombre_empresa, email_empresa, admin_empresa, hashedPassword)
}

exports.iniciarSesionServicios = async ({ email_empresa, password_admin }) => {
    if (!email_empresa || !password_admin) {
        throw new Error('El usuario no existe')
    }
    const user = await iniciarSesionModelos(email_empresa)
    const compararPassword = await bcrypt.compare(password_admin, user.password_admin)
    if (!compararPassword) {
        throw new Error('la Contraseña es incorrecta')
    }
    return user
}

exports.crearUsuarioServicios = async (empresa_id, { nombre_usuario, apellido_usuario, contacto_usuario, email_usuario }) => {
    if (!nombre_usuario || !apellido_usuario || !contacto_usuario || !email_usuario) {
        throw new Error('El usuario no existe')
    }
    return await crearUsuarioModelos(empresa_id, nombre_usuario, apellido_usuario, contacto_usuario, email_usuario)
}

exports.mostrarUsuarioServicios = async (empresa_id) => {
    const user = await mostrarUsuarioModelos(empresa_id)
    if (!user) {
        throw new Error('Usuario no encontrado')
    }
    return user
}

exports.eliminarUsuarioServicios = async (id) => {
    if (!id) {
        throw new Error('Usuario no seleccionado')
    }
    return await eliminarUsuarioModelos(id)
}

exports.actualizarUsuarioServicios = async (id, { nombre_usuario, apellido_usuario, contacto_usuario, email_usuario }) => {
    if (!id) {
        throw new Error('Usuario no seleccionado')
    }
    if (!nombre_usuario || !apellido_usuario || !contacto_usuario || !email_usuario) {
        throw new Error('Datos nuevos no ingresados')
    }
    return await actualizarUsuarioModelos(id, nombre_usuario, apellido_usuario, contacto_usuario, email_usuario)
}