var api_constants = {
  "models" : {
    "donor" : "../../models/api/donor.js",
    "child" : "../../models/api/child.js",
    "donation" : "../../models/api/donation.js",
    "template" : "../../models/api/template.js"
  }
};

var api_development_constants = {
  "models" : {
    "donor" : "../../mocks/models/api/donor",
    "child" : "../../mocks/models/api/child",
    "donation" : "../../mocks/models/api/donation",
    "template" : "../../mocks/models/api/template"
  }
}

if (process.env.NODE_ENV === 'development') {
  module.exports = api_development_constants;
} else {
  module.exports = api_constants;
}
