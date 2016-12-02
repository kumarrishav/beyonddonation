function getAllChildren(callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function getChildById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function deleteChildById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function createChild(data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function updateChild(id, data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

module.exports = {
  getAllChildren : getAllChildren,
  getChildById : getChildById,
  deleteChildById : deleteChildById,
  createChild : createChild,
  updateChild : updateChild
}
