'use strict';

var constants = require('../../config/api_constants');
var DonationModel = require(constants.models.donation);
var response = {};

module.exports = function (router) {
  router.get('/', function (req, res) {
    DonationModel.getAllDonations(function(err, data) {
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

  router.get('/time', function (req, res) {
    var fromTime = req.query.from_time;
    var toTime = req.query.to_time;
    DonationModel.getDonationsBetweenTime(fromTime, toTime, function(err, data) {
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
    DonationModel.getDonationById(id, function(err, data) {
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

  router.post('/', function (req, res) {
    console.log(req.query.data);
    DonationModel.createDonation(req.query.data, function(err, data) {
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
    DonationModel.updateDonation(id, req.query.data, function(err, data) {
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

  router.get('/donor/:id', function (req, res) {
    var id = req.params.id;
    DonationModel.getDonationsByDonorId(id, function(err, data) {
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

  router.get('/donor/:id/time', function (req, res) {
    var id = req.params.id;
    var fromTime = req.query.from_time;
    var toTime = req.query.to_time;

    DonationModel.getDonationsByDonorIdBetweenTime(id, fromTime, toTime, function(err, data) {
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


  router.get('/child/:id', function (req, res) {
    var id = req.params.id;
    DonationModel.getDonationsByChildId(id, function(err, data) {
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

  router.get('/child/:id/time', function (req, res) {
    var id = req.params.id;
    var fromTime = req.query.from_time;
    var toTime = req.query.to_time;

    DonationModel.getDonationsByChildIdBetweenTime(id, fromTime, toTime, function(err, data) {
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
