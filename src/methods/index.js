module.exports = function(model, override) {
  var override = override || {};
  var methods = {
    findById: function(req, res) {
      console.log(req);
      model.findOne({
          where: req.params.id
        })
        .then(function(dbUser) {
          res.json(dbUser);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
    find: function(req, res) {
      console.log('jere');
      model.findAll({
          where: req.params
        })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        })
    },
    create: function(req, res) {
      model.create(req.body)
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
    update: function(req, res) {
      model.update(req.body, {
          where: req.params.id
        })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
    remove: function(req, res) {
      model.destroy({ where: req.params.id })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  }
  return Object.assign({}, methods, override);
};
