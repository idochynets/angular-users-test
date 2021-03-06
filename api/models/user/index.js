'use strict';

let express = require('express');

module.exports = function (User,Auth) {
	let UserController = require('./user.controller')(User);
	let controller = new UserController();
	let router = express.Router();

	router.get('/', (req,res)=>controller.get(req,res));
	router.get('/:id', (req,res)=>controller.show(req,res));
	router.post('/', (req,res)=>controller.create(req,res));
	router.put('/:id', (req,res)=>controller.update(req,res));
	router.patch('/:id', (req,res)=>controller.update(req,res));
	router.delete('/:id', (req,res)=>controller.remove(req,res));

	return router;

}
