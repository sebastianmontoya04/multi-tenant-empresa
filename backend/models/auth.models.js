const db = require('../databases/server')

exports.registrarUsuariosModelos = async (nombre_empresa, email_empresa, admin_empresa, hashedPassword) => {
    const result = await
        db.query('INSERT INTO empresas (nombre_empresa, email_empresa, admin_empresa, password_admin) VALUES ($1, $2, $3, $4) RETURNING*',
            [nombre_empresa, email_empresa, admin_empresa, hashedPassword]
        );
    return result.rows[0]
}

exports.iniciarSesionModelos = async (email_empresa) => {
    const result = await
        db.query('SELECT * FROM empresas WHERE email_empresa = $1',
            [email_empresa]
        );
    return result.rows[0]
}

exports.crearUsuarioModelos = async (empresa_id, nombre_usuario, apellido_usuario, contacto_usuario, email_usuario) => {
    const result = await
        db.query('INSERT INTO usuarios (tenant_id, nombre_usuario, apellido_usuario, contacto_usuario, email_usuario)VALUES ($1, $2, $3, $4, $5) RETURNING*',
            [empresa_id, nombre_usuario, apellido_usuario, contacto_usuario, email_usuario]
        );
    return result.rows[0]
}

exports.mostrarUsuarioModelos = async (empresa_id) => {
    const result = await
        db.query('SELECT * FROM usuarios WHERE tenant_id = $1',
            [empresa_id]
        )
    return result.rows
}

exports.eliminarUsuarioModelos = async (id) => {
    const result = await
        db.query('DELETE FROM usuarios WHERE id = $1',
            [id]
        )
    return result.rows[0]
}

exports.actualizarUsuarioModelos = async (id, nombre_usuario, apellido_usuario, contacto_usuario, email_usuario) => {
    const result = await
        db.query('UPDATE usuarios SET nombre_usuario = $1, apellido_usuario = $2, contacto_usuario = $3, email_usuario = $4 WHERE id = $5',
            [nombre_usuario, apellido_usuario, contacto_usuario, email_usuario, id]
        )
    return result.rows[0]
}