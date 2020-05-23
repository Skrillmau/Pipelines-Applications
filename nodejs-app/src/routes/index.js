const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.render(<div><h1>Aplicación 2 corriendo</h1></div>));
//res.json({message: 'Hola muchachos'})

module.exports = router;