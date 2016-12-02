'use strict';

var constants = require('../../config/api_constants');
var DonorModel = require(constants.models.donor);
var response = {};

module.exports = function (router) {
  router.get('/', function (req, res) {
    DonorModel.getAllDonors(function(err, data) {
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
    DonorModel.getDonorById(id, function(err, data) {
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
    DonorModel.deleteDonorById(id, function(err, data) {
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
    DonorModel.createDonor(req.query.data, function(err, data) {
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
    DonorModel.updateDonor(id, req.query.data, function(err, data) {
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
