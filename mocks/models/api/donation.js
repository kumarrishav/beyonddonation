function getAllDonations(callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function getDonationById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function getDonationsBetweenTime(fromTime, toTime, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {fromTime : fromTime, toTime :toTime};
  callback(null, data);
}

function updateDonation(id, data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function createDonation(data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function getDonationsByDonorId(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function getDonationsByDonorIdBetweenTime(id, fromTime, toTime, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id, fromTime : fromTime, toTime :toTime};
  callback(null, data);
}

function getDonationsByChildId(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function getDonationsByChildIdBetweenTime(id, fromTime, toTime, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id, fromTime : fromTime, toTime :toTime};
  callback(null, data);
}




module.exports = {
  getAllDonations : getAllDonations,
  getDonationById : getDonationById,
  getDonationsBetweenTime : getDonationsBetweenTime,
  createDonation : createDonation,
  updateDonation : updateDonation,
  getDonationsByDonorId : getDonationsByDonorId,
  getDonationsByDonorIdBetweenTime : getDonationsByDonorIdBetweenTime,
  getDonationsByChildId : getDonationsByChildId,
  getDonationsByChildIdBetweenTime : getDonationsByChildIdBetweenTime
}
