'use strict';

var constants = require('../../config/api_constants');
var TemplateModel = require(constants.models.template);
var response = {};

module.exports = function (router) {
  router.get('/', function (req, res) {
    TemplateModel.getAllTemplates(function(err, data) {
      if(err) {
        res.status(500);
        response.error = true;
        response.error_msg = err.error_msg;
        response.data = null;
      } else {
        response.error = false;
        response.error_msg = null;
        response.data = data;
      }
      res.json(response);
    });
  });

  router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    TemplateModel.getTemplateById(id, function(err, data) {
      if(err) {
        res.status(500);
        response.error = true;
        response.data = null;
        response.error_msg = err.error_msg;
      } else {
        response.error = false;
        response.error_msg = null;
        response.data = data;
      }
      res.json(response);
    });
  });

  router.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    TemplateModel.deleteTemplateById(id, function(err, data) {
      if(err) {
        res.status(500);
        response.error = true;
        response.error_msg = err.error_msg;
        response.data = null;
      } else {
        response.error = false;
        response.error_msg = null;
        response.data = data;
      }
      res.json(response);
    });
  });

  router.post('/', function (req, res) {
    console.log(req.query.data);
    TemplateModel.createTemplate(req.query.data, function(err, data) {
      if(err) {
        res.status(500);
        response.error = true;
        response.error_msg = err.error_msg;
        response.data = null;
      } else {
        response.error = false;
        response.error_msg = null;
        response.data = data;
      }
      res.json(response);
    });
  });

  router.post('/update/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    console.log(req.query.data);
    TemplateModel.updateTemplate(id, req.query.data, function(err, data) {
      if(err) {
        res.status(500);
        response.error = true;
        response.error_msg = err.error_msg;
        response.data = null;
      } else {
        response.error = false;
        response.error_msg = null;
        response.data = data;
      }
      res.json(response);
    });
  });
};
