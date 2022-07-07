var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const {Teacher} = require('../models');

const v = new Validator();

router.get('/', async (req, res)=>{
	const teachers = await Teacher.findAll();
	return res.json(teachers);
});

router.get('/:id', async (req, res)=>{
	const id = req.params.id;
	const teacher = await Teacher.findByPk(id);
	return res.json(teacher || {});
});

router.post('/', async(req, res)=>{
  const schema = {
  	firstname:'string',
  	lastname:'string',
  	school:'string|optional'
  }

  const validate = v.validate( req.body, schema);

  if (validate.length){
  	return res
  	.status(400)
  	.json(validate);
  }

  const teacher = await Teacher.create(req.body);

  res.json(teacher);
});

router.put('/:id', async (req, res)=>{
 const id= req.params.id;

 let teacher = await Teacher.findByPk(id);

 if (!teacher) {
 	return res.json({message:'Teacher not Found!'});
 }

const schema = {
  	firstname:'string|optional',
  	lastname:'string|optional',
  	school:'string|optional'
  }

  const validate = v.validate( req.body, schema);

  if (validate.length){
  	return res
  	.status(400)
  	.json(validate);
  }

  teacher = await teacher.update(req.body);
  res.json(teacher);
});

router.delete('/:id', async(req,res)=>{ 
const id= req.params.id;

 const teacher = await Teacher.findByPk(id);

 if (!teacher) {
 	return res.json({message:'Teacher not Found!'});
 } 

 await teacher.destroy();

 res.json({
 	message:"data deleted"
 })

});

module.exports = router;
