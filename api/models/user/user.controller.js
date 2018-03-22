'use strict';

let Controller = require('../../utils/controller');
let Helper = require('../../utils/helper');
let co = require('co');
let mongoose = require('mongoose');
let _ = require('lodash');

module.exports = function(User){
    class UserController extends Controller {
        constructor(){
          super(User);
        }
    }
  return UserController;
}
