function getAllDonors(callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function getDonorById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function deleteDonorById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function createDonor(data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function updateDonor(id, data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

module.exports = {
  getAllDonors : getAllDonors,
  getDonorById : getDonorById,
  deleteDonorById : deleteDonorById,
  createDonor : createDonor,
  updateDonor : updateDonor
}
