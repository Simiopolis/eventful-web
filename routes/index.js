
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout', { title: 'Eventful' });
};

exports.partial = function(req, res) {
  res.render('partials/'+req.params.partial, {});
};
