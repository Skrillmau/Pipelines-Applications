const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.send('<img src="./node.png" /><br /><h1>Aplicación de NodeJs corriendo modificada desde el pipeline</h1>'));

module.exports = router;