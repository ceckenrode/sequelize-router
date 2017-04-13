module.exports = function(model, override) {
  var override = override || {};
  var methods = {
    findById: function(req, res) {
      model.findOne({
          where: { id: req.params.id }
        })
        .then(function(dbUser) {
          res.json(dbUser);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
    find: function(req, res) {
      model.findAll({
          where: req.query
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
          where: { id: req.params.id }
        })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
    remove: function(req, res) {
      model.destroy({ 
        where: { id: req.params.id }
       })
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
