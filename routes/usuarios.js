const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

//No se esta ejecutando le funcion usuariosGet, solo se hace referencia a la misma
router.get('/', usuariosGet );

// :nombreVariable
router.put('/:id', usuariosPut);

router.post('/',usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;