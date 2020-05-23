const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.json({message: 'Hola desde nodeapp y pipelines'}));

module.exports = router;