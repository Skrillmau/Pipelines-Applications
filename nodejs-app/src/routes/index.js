const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.json({message: 'Aplicación de Nodejs corriendo modificada desde el pipeline'}));

module.exports = router;