const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.send('<h1 style="text-align:center;">Aplicación de NodeJs corriendo modificada desde el pipeline</h1><br /><img style="text-align:center;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />'));

module.exports = router;