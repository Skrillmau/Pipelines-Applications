const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.send('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FNode.js&psig=AOvVaw1gHx6aPLzNmYYcHRmNQ76q&ust=1590324784203000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDYtdCDyukCFQAAAAAdAAAAABAD" /><br /><h1>Aplicación de NodeJs corriendo modificada desde el pipeline</h1>'));

module.exports = router;