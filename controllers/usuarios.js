const { response, request } = require('express');

const usuariosGet = (req = request, res = response) =>{

    const {q, nombre = 'No hay nombre', apikey, page = 1, limit} = req.query;

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) =>{

    //Para obtener toda la informacion que manda el usuario, sino desestructuramos lo que necesitamos
    // const body =req.body;

    const { nombre, edad } = req.body;

    res.json({
        msg:'POST API',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) =>{

    const {id} = req.params;

    res.status(500).json({
        msg:'put API',
        id
    });
}

const usuariosPatch = (req, res = response) =>{
    res.json({
        msg:'patch API',
        
    });
}

const usuariosDelete = (req, res = response) =>{
    res.json({
        msg:'Delete API',
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}