function getAllTemplates(callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function getTemplateById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function deleteTemplateById(id, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

function createTemplate(data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {};
  callback(null, data);
}

function updateTemplate(id, data, callback) {
  var err = {};
  err.error_msg = "My Error";
  var data = {id : id};
  callback(null, data);
}

module.exports = {
  getAllTemplates : getAllTemplates,
  getTemplateById : getTemplateById,
  deleteTemplateById : deleteTemplateById,
  createTemplate : createTemplate,
  updateTemplate : updateTemplate
}
